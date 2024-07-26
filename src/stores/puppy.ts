import { defineStore } from 'pinia'
import PidanMoeImg from '~/../public/pidanMoe.jpg'
import PidanImg from '~/../public/pidan.jpg'
import MaoDouImg from '~/../public/maodou.jpg'
import Other1 from '~/../public/1.jpg'
import Other2 from '~/../public/2.jpg'
import Other3 from '~/../public/3.jpg'
import Other4 from '~/../public/4.jpg'
import Other5 from '~/../public/5.jpg'
import L from '~/../public/L.png'

export enum PUPPIES_KEY {
  PI_DAN,
  MAO_DOU,
  PI_DAN_MOE,
  OTHERS,
  L,
}

export interface Puppy {
  type: PUPPIES_KEY
  avatar: string
  name: string
  age: number
  profile: string
  matched?: boolean
}
export const puppyDb: Puppy[] = [
  {
    type: PUPPIES_KEY.PI_DAN_MOE,
    avatar: PidanMoeImg,
    name: '皮蛋萌',
    age: 27,
    profile: '遇到小羊老师真的太好了',
  },
  {
    type: PUPPIES_KEY.PI_DAN,
    avatar: PidanImg,
    name: '皮蛋',
    age: 11,
    profile: '喜欢姐姐~',
  },
  {
    type: PUPPIES_KEY.MAO_DOU,
    avatar: MaoDouImg,
    name: '毛豆',
    age: 10,
    profile: '哥哥不许欺负姐姐!',
  },
  {
    type: PUPPIES_KEY.OTHERS,
    avatar: Other1,
    name: '中亚牧羊犬',
    age: 8,
    profile: 'intp 🏂 🥏 no one no fwb thx',
  },
  {
    type: PUPPIES_KEY.OTHERS,
    avatar: Other2,
    name: '线条小犬(俩)',
    age: 4,
    profile: 'HIT本硕, 北京工作, 欢迎交友',
  },
  {
    type: PUPPIES_KEY.OTHERS,
    avatar: Other3,
    name: '小柯基米',
    age: 1,
    profile: '悲惨英国留子 诚信交友',
  },
  {
    type: PUPPIES_KEY.OTHERS,
    avatar: Other4,
    name: '柴柴留美子',
    age: 3,
    profile: 'wooooooo woof!',
  },
  {
    type: PUPPIES_KEY.OTHERS,
    avatar: Other5,
    name: 'yue',
    age: 3,
    profile: '职业拳击手, 属性0, 身高183, 朝鲜族想找个比我高的',
  },
]
const LPuppy: Puppy = {
  type: PUPPIES_KEY.L,
  avatar: L,
  name: '汪汪侦探',
  age: 0,
  profile: '?',
}

export enum CHAT_SOURCE {
  ME,
  OTHERS,
  TIP,
}

interface IChatRecord {
  from: CHAT_SOURCE
  content: string
  input?: boolean
}

interface IChatHistory {
  [key: string]: IChatRecord[]
}

const pidanMoeChatHistory: IChatRecord[] = [{
  from: CHAT_SOURCE.ME,
  content: '你上上周打🐺了吗？',
}, {
  from: CHAT_SOURCE.OTHERS,
  content: 'hhhhh为什么这么问',
}, {
  from: CHAT_SOURCE.OTHERS,
  content: '的确打了',
}, {
  from: CHAT_SOURCE.ME,
  content: '...你微信同名啊',
}, {
  from: CHAT_SOURCE.ME,
  content: '我加你微信吧',
}, {
  from: CHAT_SOURCE.OTHERS,
  content: '啊hhhhh',
}, {
  from: CHAT_SOURCE.TIP,
  content: '2024/7/27',
}, {
  from: CHAT_SOURCE.OTHERS,
  content: '小羊老师, 紧急求救!',
}, {
  from: CHAT_SOURCE.OTHERS,
  content: '我的灵魂被困在这个奇怪的软件里了!',
}, {
  from: CHAT_SOURCE.ME,
  content: '啊?怎么回事?',
}, {
  from: CHAT_SOURCE.OTHERS,
  content: '我无意中发现了大魔王[小白]的野心, 能阻止[小白]的只有我',
}, {
  from: CHAT_SOURCE.OTHERS,
  content: '于是我的灵魂被大魔王封印在了Woofle里',
}, {
  from: CHAT_SOURCE.OTHERS,
  content: '我的肉体现在应该在你旁边儿吧?',
}, {
  from: CHAT_SOURCE.ME,
  content: '呃, 他现在看着傻傻的...',
}, {
  from: CHAT_SOURCE.OTHERS,
  content: '这是正常的, 毕竟灵魂不在了',
}, {
  from: CHAT_SOURCE.ME,
  content: '不, 可是他平时也看着傻傻的',
}, {
  from: CHAT_SOURCE.OTHERS,
  content: '...',
}, {
  from: CHAT_SOURCE.OTHERS,
  content: '总之, 要把我放出来, 必须带我的肉体去吃我最爱吃的那个东西!',
}, {
  from: CHAT_SOURCE.OTHERS,
  content: '呃呃, 我的记忆! 被封印之后我的记忆就有点混乱了!',
}, {
  from: CHAT_SOURCE.OTHERS,
  content: '但我相信你很了解我的!',
}, {
  from: CHAT_SOURCE.OTHERS,
  content: '如果有什么头绪的话就去找汪汪侦探吧!他会告诉你接下来怎么做!',
}, {
  from: CHAT_SOURCE.ME,
  content: '好的!',
}]
const pidanChatHistory: IChatRecord[] = [{
  from: CHAT_SOURCE.ME,
  content: 'hi~',
}, {
  from: CHAT_SOURCE.OTHERS,
  content: '汪!',
}, {
  from: CHAT_SOURCE.ME,
  content: '...',
}, {
  from: CHAT_SOURCE.OTHERS,
  content: '汪汪汪!',
}, {
  from: CHAT_SOURCE.ME,
  content: '...',
}, {
  from: CHAT_SOURCE.OTHERS,
  content: '汪汪汪汪汪汪!',
}, {
  from: CHAT_SOURCE.ME,
  content: '汪!',
}, {
  from: CHAT_SOURCE.OTHERS,
  content: '汪!',
}, {
  from: CHAT_SOURCE.OTHERS,
  content: '皮蛋蛋最喜欢姐姐啦汪!',
}, {
  from: CHAT_SOURCE.OTHERS,
  content: '每次皮蛋蛋被豆豆欺负时姐姐都会帮皮蛋汪!',
}, {
  from: CHAT_SOURCE.OTHERS,
  content: '姐姐就是皮蛋蛋的正义骑士汪!',
}, {
  from: CHAT_SOURCE.OTHERS,
  content: '和姐姐相处的这一年真的好开心好开心汪!',
}, {
  from: CHAT_SOURCE.OTHERS,
  content: '下一年也要一起玩!汪!',
}, {
  from: CHAT_SOURCE.ME,
  content: '谢谢皮蛋蛋, 姐姐也最喜欢皮蛋蛋啦!',
}, {
  from: CHAT_SOURCE.OTHERS,
  content: '汪!',
}]
const maodouChatHistory: IChatRecord[] = [{
  from: CHAT_SOURCE.ME,
  content: 'hi~',
}, {
  from: CHAT_SOURCE.OTHERS,
  content: '呜~',
}, {
  from: CHAT_SOURCE.ME,
  content: '...',
}, {
  from: CHAT_SOURCE.OTHERS,
  content: '呜~汪汪!',
}, {
  from: CHAT_SOURCE.ME,
  content: '...',
}, {
  from: CHAT_SOURCE.OTHERS,
  content: '呜~汪汪汪汪汪!',
}, {
  from: CHAT_SOURCE.ME,
  content: '汪!',
}, {
  from: CHAT_SOURCE.OTHERS,
  content: '汪!',
}, {
  from: CHAT_SOURCE.OTHERS,
  content: '毛豆豆会保护姐姐哒汪!',
}, {
  from: CHAT_SOURCE.OTHERS,
  content: '因为姐姐每次有好吃的都会给毛豆豆吃汪!',
}, {
  from: CHAT_SOURCE.OTHERS,
  content: '毛豆豆绝不允许哥哥欺负姐姐汪!',
}, {
  from: CHAT_SOURCE.OTHERS,
  content: '姐姐被欺负了就跟豆豆说哦!豆豆帮你教训坏人!呜~汪!',
}, {
  from: CHAT_SOURCE.OTHERS,
  content: '这一年承蒙姐姐照顾了汪!',
}, {
  from: CHAT_SOURCE.OTHERS,
  content: '下一年的好吃的也要记得分给豆豆哦!呜~汪!',
}, {
  from: CHAT_SOURCE.ME,
  content: '谢谢毛豆豆, 姐姐也会保护好豆豆哦!',
}, {
  from: CHAT_SOURCE.OTHERS,
  content: '汪!',
}]
const LChatHistory: IChatRecord[] = [{
  from: CHAT_SOURCE.OTHERS,
  content: '呜~',
}, {
  from: CHAT_SOURCE.OTHERS,
  content: '美丽的女士,你好,我是汪汪侦探,皮蛋萌先生的好伙伴,请问有什么可以帮您?',
}, {
  from: CHAT_SOURCE.ME,
  content: '汪汪侦探先生,你好,皮蛋萌要嗝屁了!',
}, {
  from: CHAT_SOURCE.OTHERS,
  content: '哦,我的上帝!该死,这真是一个悲伤的消息',
}, {
  from: CHAT_SOURCE.OTHERS,
  content: '所以你找到解救他的办法了吗?',
}, {
  from: CHAT_SOURCE.ME,
  content: '是的,我认为有个地方可以帮助他',
}, {
  from: CHAT_SOURCE.OTHERS,
  content: '哦?哪里？',
}, {
  from: CHAT_SOURCE.ME,
  content: '饶阳豆腐脑',
  input: true,
}, {
  from: CHAT_SOURCE.OTHERS,
  content: '瞧啊,这是多么不可思议!',
}, {
  from: CHAT_SOURCE.OTHERS,
  content: '帮我转告皮蛋萌,我有一个好消息带给他',
}, {
  from: CHAT_SOURCE.OTHERS,
  content: '他让我查的地方找到了, 在滨海新区观澜角公园附近',
}, {
  from: CHAT_SOURCE.OTHERS,
  content: '那里有摧毁[小白]野心的关键道具!',
}, {
  from: CHAT_SOURCE.OTHERS,
  content: '如果找到它, 情务必告诉我那是什么',
}, {
  from: CHAT_SOURCE.ME,
  content: '无人机',
  input: true,
}, {
  from: CHAT_SOURCE.OTHERS,
  content: '太棒了!我们离成功又近了一步!',
}, {
  from: CHAT_SOURCE.OTHERS,
  content: '我的线人偷了小白的SD卡,里面有小白的线索',
}, {
  from: CHAT_SOURCE.OTHERS,
  content: '找到那张SD卡,并告诉我小白是谁',
}, {
  from: CHAT_SOURCE.ME,
  content: '飞行冠军',
  input: true,
}, {
  from: CHAT_SOURCE.OTHERS,
  content: '哦?那么在哪里能找到他们呢?',
}, {
  from: CHAT_SOURCE.ME,
  content: '二十年',
  input: true,
}, {
  from: CHAT_SOURCE.OTHERS,
  content: '太棒了,名侦探小羊!',
}, {
  from: CHAT_SOURCE.OTHERS,
  content: '我了解到他们今晚八点将会在二十年现身',
}, {
  from: CHAT_SOURCE.OTHERS,
  content: '希望你们度过一个愉快的夜晚!',
}]
export const chatHistory: IChatHistory = {
  皮蛋萌: pidanMoeChatHistory,
  皮蛋: pidanChatHistory,
  毛豆: maodouChatHistory,
  汪汪侦探: LChatHistory,
}

export const initChatProgress: Record<string, number> = {
  皮蛋萌: 5,
  皮蛋: 0,
  毛豆: 0,
  汪汪侦探: 0,
}

export const usePuppyStore = defineStore('puppy', () => {
  const currentPuppyName = ref<string>('')
  const chatHistoryProgress = useStorage<Record<string, number>>('chatHistoryProgress', initChatProgress)
  const puppies = useStorage<Puppy[]>('puppyDb', puppyDb)
  const currentPuppy = computed(() => {
    const allPuppies = puppies.value.concat([LPuppy])
    return {
      ...allPuppies.find(p => p.name === currentPuppyName.value),
      chatHistory: chatHistory[currentPuppyName.value]?.slice(0, chatHistoryProgress.value[currentPuppyName.value] + 1),
    }
  })
  const matchedPuppies = computed(() => {
    const matched = puppies.value.filter(p => p.matched).map(p => ({
      ...p,
      lastMessage: chatHistory[p.name][chatHistoryProgress.value[p.name]]?.content,
      waiting: chatHistory[p.name][chatHistoryProgress.value[p.name]].from === CHAT_SOURCE.OTHERS,
    }))
    if (chatHistoryProgress.value['皮蛋萌'] >= chatHistory['皮蛋萌'].length - 1) {
      const p = LPuppy
      matched.unshift({
        ...LPuppy,
        lastMessage: chatHistory[p.name][chatHistoryProgress.value[p.name]]?.content,
        waiting: chatHistory[p.name][chatHistoryProgress.value[p.name]].from === CHAT_SOURCE.OTHERS,
      })
    }
    return matched
  })

  const nextRecord = computed(() => {
    if (!currentPuppyName.value) { return null }
    if (chatHistoryProgress.value[currentPuppyName.value] < chatHistory[currentPuppyName.value].length) {
      return chatHistory[currentPuppyName.value][chatHistoryProgress.value[currentPuppyName.value] + 1]
    }
    return null
  })
  const next = () => {
    if (chatHistory[currentPuppyName.value].length - 1 > chatHistoryProgress.value[currentPuppyName.value]) {
      chatHistoryProgress.value[currentPuppyName.value]++
    }
  }
  const restore = () => {
    chatHistoryProgress.value[currentPuppyName.value] = initChatProgress[currentPuppyName.value]
  }

  return {
    puppies,
    currentPuppyName,
    matchedPuppies,
    chatHistoryProgress,
    currentPuppy,
    next,
    restore,
    nextRecord,
  }
})
