<script setup lang="ts">
import { useParentBounding } from '~/hooks/useParentBounding'
import type { Puppy } from '~/stores/puppy'

const props = defineProps<{
  puppy: Puppy
}>()

const emit = defineEmits<{
  (e: 'like', puppy: Puppy): void
  (e: 'nope', puppy: Puppy): void
}>()

const destroyed = ref(false)
const el = ref<HTMLElement >()
const rotateFactor = 0.05
const img = computed(() => `url(${props.puppy.avatar})`)

const state = reactive({
  style: {},
  styleLike: {},
  styleNope: {},
})
const parent = useParentBounding(el)

onMounted(() => {
  const draggable = useDraggable(el, {
    initialValue: {
      x: parent.x.value,
      y: parent.y.value,
    },
  })
  let animationId: number | null = null

  function springEffectStep(currentValue: number, currentVelocity: number, targetValue: number, stiffness: number, damping: number, dt: number) {
    const force = -stiffness * (currentValue - targetValue) - damping * currentVelocity
    const acceleration = force // Assuming unit mass for simplicity
    const newVelocity = currentVelocity + acceleration * dt
    const newValue = currentValue + newVelocity * dt
    return { value: newValue, velocity: newVelocity }
  }

  const velocity = { x: 0.5, y: 0.5 }

  const vector = {
    x: computed(() => draggable.x.value - parent.x.value),
    y: computed(() => draggable.y.value - parent.y.value),
  }
  const cancelActionAnimate = () => {
    // 使用springEffectStep函数计算新的x和y值
    const newX = springEffectStep(draggable.x.value, velocity.x, parent.x.value, 100, 10, 1.2 / 60)
    const newY = springEffectStep(draggable.y.value, velocity.y, parent.y.value, 100, 10, 1.2 / 60)

    draggable.x.value = newX.value
    velocity.x = newX.velocity
    draggable.y.value = newY.value
    velocity.y = newY.velocity
    return Math.abs(vector.x.value) < 0.1 || Math.abs(vector.y.value) < 0.1
  }
  const confirmActionAnimate = () => {
    // 使用springEffectStep函数计算新的x和y值
    const newX = springEffectStep(draggable.x.value, velocity.x, parent.x.value, -100, 10, 1.2 / 60)
    const newY = springEffectStep(draggable.y.value, velocity.y, parent.y.value, -100, 10, 1.2 / 60)

    draggable.x.value = newX.value
    velocity.x = newX.velocity
    draggable.y.value = newY.value
    velocity.y = newY.velocity
    return Math.abs(vector.x.value) > 999 || Math.abs(vector.y.value) > 999
  }
  function animate(animationFn: () => boolean, onEnd?: () => void) {
    if (draggable.isDragging.value) {
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
      animationId = null
      return
    }
    if (animationFn()) {
      if (animationId !== null) {
        cancelAnimationFrame(animationId)
        animationId = null
        onEnd?.()
      }
    }
    else {
      animationId = requestAnimationFrame(() => animate(animationFn, onEnd))
    }
  }

  watch(draggable.isDragging, (value) => {
    if (!value && animationId === null) {
      if (vector.x.value < -parent.width.value / 3) {
        // 拖拽结束且向左拖拽，表示不喜欢
        animate(confirmActionAnimate, () => {
          emit('nope', props.puppy)
          destroyed.value = true
        })
      }
      else if (vector.x.value > parent.width.value / 3) {
        // 拖拽结束且向右拖拽，表示喜欢
        animate(confirmActionAnimate, () => {
          emit('like', props.puppy)
          destroyed.value = true
        })
      }
      else {
        // 当拖拽结束且没有正在进行的动画时，开始动画
        animate(cancelActionAnimate)
      }
    }
  })
  state.style = computed(() => {
    return [
      draggable.style.value,
      {
        transform: `rotate(${vector.x.value * rotateFactor}deg)`,
        height: `${parent.height.value}px`,
        width: `${parent.width.value}px`,
      },
    ]
  })
  state.styleLike = computed(() => {
    return {
      opacity: vector.x.value > 0 ? 2 * vector.x.value / parent.width.value : 0,
    }
  })
  state.styleNope = computed(() => {
    return {
      opacity: vector.x.value < 0 ? -2 * vector.x.value / parent.width.value : 0,
    }
  })
})
</script>

<template>
  <div
    v-if="!destroyed"
    ref="el" :style="state.style" class="img"
    absolute h-20 w-20 overflow-hidden rounded-2xl bg-cover bg-center bg-no-repeat
  >
    <div absolute left-0 top-0 h-full w-full bg-gradient-from-transparent bg-gradient-to-black bg-gradient-to-b />
    <div :style="state.styleLike" absolute left-5 top-10 rotate-330 rounded px-4 py-2 text-5xl text-green-6 font-bold font-mono outline-green-6 outline>
      LIKE
    </div>
    <div :style="state.styleNope" absolute right-5 top-10 rotate-30 rounded px-4 py-2 text-5xl text-red-6 font-bold font-mono outline-red-6 outline>
      NOPE
    </div>
    <div absolute bottom-0 left-0 right-0 flex flex-col items-start gap-2 p-4>
      <div flex gap-4 text-2xl>
        <div>{{ puppy.name }}</div>
        <div>{{ puppy.age }}</div>
      </div>
      <div flex gap-1 text-left>
        <div i-carbon-quotes />{{ puppy.profile }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.img {
  background-image: v-bind(img);
}
</style>
