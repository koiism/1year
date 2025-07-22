import PidanMoeImg from '/pidanMoe.jpg'
import PidanImg from '/pidan.jpg'
import MaoDouImg from '/maodou.jpg'
import JinShuiImg from '/jinshui.webp'
import Other1 from '/1.jpg'
import Other2 from '/2.jpg'
import Other3 from '/3.jpg'
import Other4 from '/4.jpg'
import Other5 from '/5.jpg'
import L from '/L.png'
import Alien from '/alien.webp'
import { usePuppyStore } from '~/stores/puppy'

export enum CHAT_SOURCE {
  ME,
  OTHERS,
  TIP,
}
export enum PUPPIES_KEY {
  PI_DAN,
  MAO_DOU,
  PI_DAN_MOE,
  JIN_SHUI,
  L,
  ALIEN,
}
export const puppyNameMap = {
  [PUPPIES_KEY.PI_DAN_MOE]: '皮蛋萌',
  [PUPPIES_KEY.PI_DAN]: '皮蛋',
  [PUPPIES_KEY.MAO_DOU]: '毛豆',
  [PUPPIES_KEY.JIN_SHUI]: '金水',
  [PUPPIES_KEY.L]: '汪汪侦探',
  [PUPPIES_KEY.ALIEN]: '赛博星人',
} as const
export type puppyNames = typeof puppyNameMap[PUPPIES_KEY]

type IChatRecord = {
  from: CHAT_SOURCE.ME
  content: string
  id?: symbol
  input?: boolean // input 为 true 表示需要用户手动输入正确答案
  isUnlocked?: () => boolean // isUnlocked 钩子函数，用于判断该对话是否解锁
} | {
  from: CHAT_SOURCE.TIP
  content: string
  id?: symbol
} | {
  from: CHAT_SOURCE.OTHERS
  content: string
  id?: symbol
}

type IChatHistory = Record<puppyNames, IChatRecord[]>

export const OTHER_PUPPIES_KEY = -1

export type TPuppiesStatus = Record<puppyNames, {
  matched: boolean
  chatProgress: number
}>
export interface Puppy {
  type: PUPPIES_KEY | typeof OTHER_PUPPIES_KEY
  avatar: string
  name: string
  age: number | string
  profile: string
  showInChat?: (() => boolean) | boolean
  showInChoose?: (() => boolean) | boolean
}
export interface PuppyCouldBeMatched extends Puppy {
  name: puppyNames
}
export const otherPuppies: Puppy[] = [
  {
    type: OTHER_PUPPIES_KEY,
    avatar: Other1,
    name: '中亚牧羊犬',
    age: '8 岁',
    profile: 'intp 🏂 🥏 no ons no fwb thx',
  },
  {
    type: OTHER_PUPPIES_KEY,
    avatar: Other2,
    name: '线条小犬(俩)',
    age: '4 岁',
    profile: 'HIT本硕, 北京工作, 欢迎交友',
  },
  {
    type: OTHER_PUPPIES_KEY,
    avatar: Other3,
    name: '小柯基米',
    age: '3 个月',
    profile: '悲惨英国留子 诚信交友',
  },
  {
    type: OTHER_PUPPIES_KEY,
    avatar: Other4,
    name: '柴柴留美子',
    age: '3 岁',
    profile: 'wooooooo woof!',
  },
  {
    type: OTHER_PUPPIES_KEY,
    avatar: Other5,
    name: 'yue',
    age: '3 岁',
    profile: '职业拳击手, 属性0, 身高183, 朝鲜族想找个比我高的',
  },

]

export const initPuppiesStatus: TPuppiesStatus = {
  [puppyNameMap[PUPPIES_KEY.PI_DAN_MOE]]: {
    matched: false,
    chatProgress: 5,
  },
  [puppyNameMap[PUPPIES_KEY.PI_DAN]]: {
    matched: false,
    chatProgress: 0,
  },
  [puppyNameMap[PUPPIES_KEY.MAO_DOU]]: {
    matched: false,
    chatProgress: 0,
  },
  [puppyNameMap[PUPPIES_KEY.JIN_SHUI]]: {
    matched: false,
    chatProgress: 0,
  },
  [puppyNameMap[PUPPIES_KEY.L]]: {
    matched: false,
    chatProgress: 0,
  },
  [puppyNameMap[PUPPIES_KEY.ALIEN]]: {
    matched: false,
    chatProgress: 0,
  },
}

const HISTORY_IDS = {
  JIN_SHUI_NO_EGG: Symbol('金水没蛋了'),
  OUTPUT_IMPORTANT_INFO: Symbol('输出重要信息'),
  ALIEN_USE_WOOFLE: Symbol('赛博星人使用 Woofle'),
  JIN_SHUI_JUE_YU: Symbol('金水绝育'),
}

function unlockById(key: PUPPIES_KEY, id: symbol) {
  const puppyStore = usePuppyStore()
  const { checkPuppyChatProgressById } = puppyStore
  return checkPuppyChatProgressById(key, id)
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
  content: '2025/7/27',
}, {
  from: CHAT_SOURCE.OTHERS,
  content: '咩姐，金水也不小了，咱啥时候给他把绝育做了吧？',
  id: HISTORY_IDS.JIN_SHUI_JUE_YU,
}, {
  from: CHAT_SOURCE.ME,
  content: '我也想，不过我要先问问金水的意见',
}, {
  from: CHAT_SOURCE.ME,
  content: '金水说他蛋被人偷了, 你有什么头绪吗？',
  isUnlocked: () => unlockById(PUPPIES_KEY.JIN_SHUI, HISTORY_IDS.JIN_SHUI_NO_EGG),
}, {
  from: CHAT_SOURCE.OTHERS,
  content: '不知道该从哪里开始吐槽，不过就先接受这个设定吧',
}, {
  from: CHAT_SOURCE.OTHERS,
  content: '不过倒也合理，金水的蛋蛋的确有些特殊，被人偷了也算正常',
}, {
  from: CHAT_SOURCE.ME,
  content: '？哪里特殊了',
}, {
  from: CHAT_SOURCE.OTHERS,
  content: '因为金水的蛋是金蛋啊',
  id: HISTORY_IDS.OUTPUT_IMPORTANT_INFO,
}, {
  from: CHAT_SOURCE.ME,
  content: '你在跟我开玩笑？',
}, {
  from: CHAT_SOURCE.OTHERS,
  content: '不，我认真的',
}, {
  from: CHAT_SOURCE.ME,
  content: '哎，看来大家都没有什么有用的线索呀……',
  isUnlocked: () => {
    return unlockById(PUPPIES_KEY.PI_DAN_MOE, HISTORY_IDS.OUTPUT_IMPORTANT_INFO)
      && unlockById(PUPPIES_KEY.PI_DAN, HISTORY_IDS.OUTPUT_IMPORTANT_INFO)
      && unlockById(PUPPIES_KEY.MAO_DOU, HISTORY_IDS.OUTPUT_IMPORTANT_INFO)
  },
}, {
  from: CHAT_SOURCE.OTHERS,
  content: '倒是还有个都市传说，我听说最近有一些外星人专门偷别人的蛋蛋',
}, {
  from: CHAT_SOURCE.OTHERS,
  content: '据说他们也会刷社交软件，也许你可以在 Woofle 中碰碰运气',
  id: HISTORY_IDS.ALIEN_USE_WOOFLE,
}]
const pidanChatHistory: IChatRecord[] = [{
  from: CHAT_SOURCE.OTHERS,
  content: '姐姐你终于回来啦！皮蛋想死你啦！姐姐！',
}, {
  from: CHAT_SOURCE.ME,
  content: '嘿嘿，姐姐也想皮蛋蛋了~',
}, {
  from: CHAT_SOURCE.ME,
  content: '姐姐去泰国这几天，皮蛋蛋有没有在家乖乖听哥哥的话呀？',
}, {
  from: CHAT_SOURCE.OTHERS,
  content: '哼，我皮蛋可是最给哥哥省心的小狗啦！',
}, {
  from: CHAT_SOURCE.OTHERS,
  content: '倒是那个新来的金水，成天不听哥哥的话到处乱跑',
}, {
  from: CHAT_SOURCE.OTHERS,
  content: '所以皮蛋这么乖，姐姐什么时候带皮蛋出去玩呀！',
}, {
  from: CHAT_SOURCE.ME,
  content: '哈哈哈，我抽空一定带你们出去玩！',
}, {
  from: CHAT_SOURCE.ME,
  content: '话说回来，金水说他蛋蛋丢了，你有什么头绪吗？',
  isUnlocked: () => unlockById(PUPPIES_KEY.JIN_SHUI, HISTORY_IDS.JIN_SHUI_NO_EGG),
}, {
  from: CHAT_SOURCE.OTHERS,
  content: '嗯……我也不确定呢',
}, {
  from: CHAT_SOURCE.OTHERS,
  content: '不过前两天出去玩的时候这小崽子消失了好久，回来的时候就没有味道了',
  id: HISTORY_IDS.OUTPUT_IMPORTANT_INFO,
}, {
  from: CHAT_SOURCE.ME,
  content: '哎，看来大家都没有什么有用的线索呀……',
  isUnlocked: () => {
    return unlockById(PUPPIES_KEY.PI_DAN_MOE, HISTORY_IDS.OUTPUT_IMPORTANT_INFO)
      && unlockById(PUPPIES_KEY.PI_DAN, HISTORY_IDS.OUTPUT_IMPORTANT_INFO)
      && unlockById(PUPPIES_KEY.MAO_DOU, HISTORY_IDS.OUTPUT_IMPORTANT_INFO)
  },
}, {
  from: CHAT_SOURCE.OTHERS,
  content: '倒是还有个都市传说，我听说最近有一些外星人专门偷别人的蛋蛋',
}, {
  from: CHAT_SOURCE.OTHERS,
  content: '据说他们也会刷社交软件，也许你可以在 Woofle 中碰碰运气',
  id: HISTORY_IDS.ALIEN_USE_WOOFLE,
}]
const maodouChatHistory: IChatRecord[] = [{
  from: CHAT_SOURCE.OTHERS,
  content: '姐姐我饿',
}, {
  from: CHAT_SOURCE.ME,
  content: '皮蛋萌也太不像话啦！我不在家怎么能饿着我们毛豆豆！',
}, {
  from: CHAT_SOURCE.OTHERS,
  content: '那倒也没有饿着，就是有点儿馋……',
}, {
  from: CHAT_SOURCE.ME,
  content: '好吧，姐姐过几天带你去吃好吃的去',
}, {
  from: CHAT_SOURCE.ME,
  content: '对了，金水弟弟说他蛋蛋被偷了，你有什么头绪吗？',
  isUnlocked: () => unlockById(PUPPIES_KEY.JIN_SHUI, HISTORY_IDS.JIN_SHUI_NO_EGG),
}, {
  from: CHAT_SOURCE.OTHERS,
  content: '不知道诶，我俩出去玩一般都是一起吃自助餐',
}, {
  from: CHAT_SOURCE.OTHERS,
  content: '不过好像有一次吃着吃着就不见人影了, 我当时怀疑他是背着我吃独食了',
  id: HISTORY_IDS.OUTPUT_IMPORTANT_INFO,
}, {
  from: CHAT_SOURCE.ME,
  content: '哎，看来大家都没有什么有用的线索呀……',
  isUnlocked: () => {
    return unlockById(PUPPIES_KEY.PI_DAN_MOE, HISTORY_IDS.OUTPUT_IMPORTANT_INFO)
      && unlockById(PUPPIES_KEY.PI_DAN, HISTORY_IDS.OUTPUT_IMPORTANT_INFO)
      && unlockById(PUPPIES_KEY.MAO_DOU, HISTORY_IDS.OUTPUT_IMPORTANT_INFO)
  },
}, {
  from: CHAT_SOURCE.OTHERS,
  content: '倒是还有个都市传说，我听说最近有一些外星人专门偷别人的蛋蛋',
}, {
  from: CHAT_SOURCE.OTHERS,
  content: '据说他们也会刷社交软件，也许你可以在 Woofle 中碰碰运气',
  id: HISTORY_IDS.ALIEN_USE_WOOFLE,
}]
const LChatHistory: IChatRecord[] = [{
  from: CHAT_SOURCE.OTHERS,
  content: '美丽的女士，您好，我是汪汪侦探，我在您身上闻到了案子的味道',
}, {
  from: CHAT_SOURCE.OTHERS,
  content: '我可以帮助您，不过在此之前，请您先报上名号，我汪汪侦探可不接无名之辈的案子~',
}, {
  from: CHAT_SOURCE.ME,
  content: '新天津卫咩咩狗王',
  input: true,
}, {
  from: CHAT_SOURCE.OTHERS,
  content: '原来是大名鼎鼎的新天津卫咩咩狗王呀，久仰大名',
}, {
  from: CHAT_SOURCE.OTHERS,
  content: '我是一名资深的犬侦探，我已经对这个案子进行了深入的调查',
}, {
  from: CHAT_SOURCE.OTHERS,
  content: '根据我调查的结果，偷走金水蛋蛋的幕后黑手，应该就藏在皮蛋萌的“过去”之中',
}, {
  from: CHAT_SOURCE.OTHERS,
  content: '我只能言尽于此，希望金水早日找到自己的蛋蛋',
}]
const jinshuiHistory: IChatRecord[] = [{
  from: CHAT_SOURCE.OTHERS,
  content: '呜呜呜，姐姐😭',
}, {
  from: CHAT_SOURCE.ME,
  content: '怎么了小宝？',
}, {
  from: CHAT_SOURCE.OTHERS,
  content: '我的蛋蛋被人偷啦！😭😭😭',
  id: HISTORY_IDS.JIN_SHUI_NO_EGG,
}, {
  from: CHAT_SOURCE.ME,
  content: '……',
}, {
  from: CHAT_SOURCE.ME,
  content: '不知道该从哪里开始吐槽，不过就先接受这个设定吧',
}, {
  from: CHAT_SOURCE.ME,
  content: '姐姐刚想问小宝要不要去绝育',
  isUnlocked: () => unlockById(PUPPIES_KEY.PI_DAN_MOE, HISTORY_IDS.JIN_SHUI_JUE_YU),
}, {
  from: CHAT_SOURCE.ME,
  content: '这样也蛮好，蛋蛋没了就没了吧，正好不用去绝育了',
}, {
  from: CHAT_SOURCE.OTHERS,
  content: '不！姐姐你是女孩子，你不懂蛋蛋对于我们小公狗来说的重要性',
}, {
  from: CHAT_SOURCE.OTHERS,
  content: '就算要绝育，我也不能接受我的蛋蛋就这么失踪！',
}, {
  from: CHAT_SOURCE.OTHERS,
  content: '姐姐，你要为我主持公道呀！',
}, {
  from: CHAT_SOURCE.ME,
  content: '……好吧，这事儿就交给姐姐吧！',
}, {
  from: CHAT_SOURCE.ME,
  content: '姐姐一定将坏人绳之以法！',
}]
const alienHistory: IChatRecord[] = [{
  from: CHAT_SOURCE.ME,
  content: '快把我们小宝的蛋蛋换回来，你这个变态外星人！',
}, {
  from: CHAT_SOURCE.OTHERS,
  content: '哇嘎嘎嘎嘎嘎',
}, {
  from: CHAT_SOURCE.OTHERS,
  content: '我是外星人，我可以偷东西，我可以做任何事情',
}, {
  from: CHAT_SOURCE.OTHERS,
  content: '想要蛋蛋就找到我，然后打败我吧',
}, {
  from: CHAT_SOURCE.OTHERS,
  content: '哇嘎嘎嘎嘎嘎嘎嘎',
}, {
  from: CHAT_SOURCE.ME,
  content: '……有病',
}, {
  from: CHAT_SOURCE.ME,
  content: '你丫给我等着',
}]
export const chatHistory: IChatHistory = {
  [puppyNameMap[PUPPIES_KEY.PI_DAN_MOE]]: pidanMoeChatHistory,
  [puppyNameMap[PUPPIES_KEY.PI_DAN]]: pidanChatHistory,
  [puppyNameMap[PUPPIES_KEY.MAO_DOU]]: maodouChatHistory,
  [puppyNameMap[PUPPIES_KEY.JIN_SHUI]]: jinshuiHistory,
  [puppyNameMap[PUPPIES_KEY.L]]: LChatHistory,
  [puppyNameMap[PUPPIES_KEY.ALIEN]]: alienHistory,
}

function calculateAge(birthday: string) {
  const birthdayDate = new Date(birthday)
  const today = new Date()
  let age = today.getFullYear() - birthdayDate.getFullYear()
  const m = today.getMonth() - birthdayDate.getMonth()
  if (m < 0 || (m === 0 && today.getDate() < birthdayDate.getDate())) {
    age--
  }
  if (age <= 0) {
    return `${(m + 12) % 12} 个月`
  }
  return `${age} 岁`
}

export const puppiesCouldBeMatched: PuppyCouldBeMatched[] = [
  {
    type: PUPPIES_KEY.L,
    avatar: L,
    name: '汪汪侦探',
    age: 0,
    profile: '?',
    showInChoose() {
      return unlockById(PUPPIES_KEY.PI_DAN_MOE, HISTORY_IDS.OUTPUT_IMPORTANT_INFO)
        || unlockById(PUPPIES_KEY.PI_DAN, HISTORY_IDS.OUTPUT_IMPORTANT_INFO)
        || unlockById(PUPPIES_KEY.MAO_DOU, HISTORY_IDS.OUTPUT_IMPORTANT_INFO)
    },
  },
  {
    type: PUPPIES_KEY.ALIEN,
    avatar: Alien,
    name: '赛博星人',
    age: 0,
    profile: '我要蛋蛋！我要蛋蛋！我要蛋蛋！',
    showInChoose() {
      return unlockById(PUPPIES_KEY.PI_DAN_MOE, HISTORY_IDS.OUTPUT_IMPORTANT_INFO)
        || unlockById(PUPPIES_KEY.PI_DAN, HISTORY_IDS.OUTPUT_IMPORTANT_INFO)
        || unlockById(PUPPIES_KEY.MAO_DOU, HISTORY_IDS.OUTPUT_IMPORTANT_INFO)
    },
  },
  {
    type: PUPPIES_KEY.JIN_SHUI,
    avatar: JinShuiImg,
    name: puppyNameMap[PUPPIES_KEY.JIN_SHUI],
    age: calculateAge('2025-04-27'),
    profile: '感谢咩咩姐收留我，我一定乖乖嘟',
  },
  {
    type: PUPPIES_KEY.PI_DAN_MOE,
    avatar: PidanMoeImg,
    name: '皮蛋萌',
    age: calculateAge('1996-11-07'),
    profile: '遇到小羊老师真的太好了',
  },
  {
    type: PUPPIES_KEY.PI_DAN,
    avatar: PidanImg,
    name: '皮蛋',
    age: calculateAge('2014-07-01'),
    profile: '喜欢姐姐~',
  },
  {
    type: PUPPIES_KEY.MAO_DOU,
    avatar: MaoDouImg,
    name: '毛豆',
    age: calculateAge('2015-12-01'),
    profile: '哥哥不许欺负姐姐!',
  },
]
