import { defineStore } from 'pinia'
import type { PUPPIES_KEY, Puppy, PuppyCouldBeMatched, TPuppiesStatus, puppyNames } from '~/constants/chatHistory'
import { CHAT_SOURCE, chatHistory, initPuppiesStatus, otherPuppies, puppiesCouldBeMatched, puppyNameMap } from '~/constants/chatHistory'

export const usePuppyStore = defineStore('puppy', () => {
  const currentPuppyName = ref<puppyNames>()
  const puppiesStatus = useStorage<TPuppiesStatus>('puppiesStatus', initPuppiesStatus)
  const puppies = ref<PuppyCouldBeMatched[]>(puppiesCouldBeMatched)
  const judgeIfPuppyMatched = (puppy: Puppy) => {
    if (typeof puppy.showInChat === 'boolean') {
      return puppy.showInChat
    }
    if (typeof puppy.showInChat === 'function') {
      return puppy.showInChat()
    }
    if (puppy.name in puppiesStatus.value && puppiesStatus.value[puppy.name as puppyNames].matched) {
      return true
    }
    return false
  }
  const checkPuppyChatProgressByIndex = (key: PUPPIES_KEY, index: number) => {
    const targetPuppyName = puppyNameMap[key]
    const targetStatus = puppiesStatus.value[targetPuppyName]
    const targetHistory = chatHistory[targetPuppyName]
    return targetStatus.chatProgress >= (targetHistory.length + index) % targetHistory.length
  }
  const checkPuppyChatProgressById = (key: PUPPIES_KEY, id: symbol) => {
    const targetPuppyName = puppyNameMap[key]
    const targetStatus = puppiesStatus.value[targetPuppyName]
    const targetHistory = chatHistory[targetPuppyName]
    const targetIndex = targetHistory.findIndex(record => record.id === id)
    if (targetIndex === -1) {
      console.warn(`找不到记录: ${targetPuppyName} - ${id.toString().match(/Symbol\((.+)\)/)?.[1]}`)
      return false
    }
    return targetStatus.chatProgress >= targetIndex
  }
  const puppiesChooseList = computed<Puppy[]>(() => {
    return [...puppiesCouldBeMatched, ...otherPuppies].filter((puppy) => {
      if (judgeIfPuppyMatched(puppy)) {
        return false
      }
      if (typeof puppy.showInChoose === 'boolean') {
        return puppy.showInChoose
      }
      if (typeof puppy.showInChoose === 'function') {
        return puppy.showInChoose()
      }
      return true
    })
  })
  const currentPuppy = computed(() => {
    if (!currentPuppyName.value) {
      return null
    }
    return {
      ...puppies.value.find(p => p.name === currentPuppyName.value),
      chatHistory: chatHistory?.[currentPuppyName.value]?.slice(0, puppiesStatus.value[currentPuppyName.value].chatProgress + 1),
    }
  })
  const matchedPuppies = computed(() => {
    const matched = puppies.value.filter(p => judgeIfPuppyMatched(p)).map(p => ({
      ...p,
      lastMessage: chatHistory[p.name]?.[puppiesStatus.value[p.name].chatProgress]?.content,
      waiting: chatHistory[p.name]?.[puppiesStatus.value[p.name].chatProgress]?.from === CHAT_SOURCE.OTHERS,
    }))
    return matched
  })

  const nextRecord = computed(() => {
    if (!currentPuppyName.value) {
      return null
    }
    if (puppiesStatus.value[currentPuppyName.value].chatProgress < chatHistory[currentPuppyName.value].length) {
      return chatHistory[currentPuppyName.value][puppiesStatus.value[currentPuppyName.value].chatProgress + 1]
    }
    return null
  })
  const next = () => {
    if (!currentPuppyName.value) {
      return
    }
    if (chatHistory[currentPuppyName.value].length - 1 > puppiesStatus.value[currentPuppyName.value].chatProgress) {
      puppiesStatus.value[currentPuppyName.value].chatProgress++
    }
  }
  const restore = () => {
    if (!currentPuppyName.value) {
      return
    }
    puppiesStatus.value[currentPuppyName.value] = initPuppiesStatus[currentPuppyName.value]
  }

  return {
    puppiesChooseList,
    currentPuppyName,
    matchedPuppies,
    puppiesStatus,
    currentPuppy,
    next,
    restore,
    nextRecord,
    checkPuppyChatProgressByIndex,
    checkPuppyChatProgressById,
  }
})
