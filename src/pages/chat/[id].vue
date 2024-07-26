<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { CHAT_SOURCE, PUPPIES_KEY, usePuppyStore } from '~/stores/puppy'

const containerRef = ref<HTMLDivElement>()

const route = useRoute<'/chat/[id]'>()
const puppyStore = usePuppyStore()
puppyStore.currentPuppyName = route.params.id
const { currentPuppy, nextRecord } = storeToRefs(puppyStore)
function next() {
  puppyStore.next()
  nextTick(() => {
    containerRef.value?.scrollTo({
      top: 999999,
      behavior: 'smooth',
    })
  })
}
function send() {
  if (puppyStore.nextRecord?.from === CHAT_SOURCE.ME) {
    next()
  }
}
const inputValue = ref('')
watch(nextRecord, () => {
  if (nextRecord.value?.from !== CHAT_SOURCE.ME) {
    setTimeout(() => {
      next()
    }, 1000)
  }
  else {
    if (nextRecord.value.input) {
      inputValue.value = ''
    }
    else {
      inputValue.value = nextRecord.value.content
    }
  }
}, { immediate: true })
</script>

<template>
  <div h-full w-full flex flex-col>
    <div relative h-15 flex flex-none items-center justify-center>
      <RouterLink to="/chat" i-carbon-chevron-left absolute bottom-0 left-0 top-0 m-auto h-6 w-6 text-gray-4 />
      <div flex flex-col items-center justify-center gap-1>
        <img :src="currentPuppy.avatar" h-8 w-8 rounded-full object-cover>
        <div text-center text-xs text-gray-4>
          {{ currentPuppy.name }}
        </div>
      </div>
    </div>
    <div ref="containerRef" flex-1 overflow-auto pb-6>
      <div v-if="currentPuppy.type !== PUPPIES_KEY.PI_DAN_MOE" pt-2 text-xs text-gray-4>
        你已于 2024/7/27 与 {{ currentPuppy.name }} 配对
      </div>
      <div v-else pt-2 text-xs text-gray-4>
        你已于 2023/6/27 与 {{ currentPuppy.name }} 配对
      </div>
      <TransitionGroup name="list" tag="ul">
        <div v-for="(record, index) in currentPuppy.chatHistory" :key="index" flex flex-col items-start justify-start gap-1 p-2>
          <div v-if="record.from === CHAT_SOURCE.ME" w-full flex justify-end>
            <div rounded-full rounded-br-0 bg-blue-5 px-3 py-1 text-align-start text-sm>
              {{ record.content }}
            </div>
          </div>
          <div v-else-if="record.from === CHAT_SOURCE.OTHERS" w-full flex justify-start>
            <div rounded-full rounded-bl-0 bg-gray-800 px-3 py-1 text-align-start text-sm>
              {{ record.content }}
            </div>
          </div>
          <div v-else w-full pt-2 text-xs text-gray-4>
            {{ record.content }}
          </div>
        </div>
      </TransitionGroup>
    </div>
    <div flex-none>
      <div
        min-h-8 w-full flex items-center justify-between rounded-full px-6 py-1 text-align-start ring-1 ring-gray-6
      >
        <template v-if="puppyStore.nextRecord?.from === CHAT_SOURCE.ME">
          <input v-model="inputValue" flex-1 bg-transparent outline-none :disabled="!nextRecord?.input">
          <div flex flex-none items-center justify-end>
            <div
              v-if="inputValue === nextRecord?.content"
              i-carbon-send-filled text-blue-5 @click="send"
            />
            <div
              v-else
              i-carbon-send text-gray-6
            />
          </div>
        </template>
        <template v-else>
          <div />
          <div flex flex-1 items-center justify-end>
            <div
              i-carbon-send text-gray-6
            />
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<style scoped>
.list-move, /* 对移动中的元素应用的过渡 */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

/* 确保将离开的元素从布局流中删除
  以便能够正确地计算移动的动画。 */
.list-leave-active {
  position: absolute;
}
</style>
