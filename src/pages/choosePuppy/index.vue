<script setup lang="ts">
import { storeToRefs } from 'pinia'
import type { Puppy } from '~/stores/puppy'
import { PUPPIES_KEY, usePuppyStore } from '~/stores/puppy'

const puppyStore = usePuppyStore()
const { puppies } = storeToRefs(puppyStore)

const matched = reactive({
  show: false,
  img: puppies.value[0].avatar,
})
const matchedImg = computed(() => (`url(${matched.img})`))

const matchBgCls = computed(() => {
  return {
    'opacity-0': !matched.show,
    'pointer-events-none': !matched.show,
    'matched-bg': true,
  }
})
const matchTxtCls = computed(() => {
  return {
    'opacity-0': !matched.show,
    'transform-scale-300': !matched.show,
  }
})

function onLike(puppy: Puppy) {
  if (puppy.type === PUPPIES_KEY.OTHERS) {
    return
  }
  puppy.matched = true
  matched.img = puppy.avatar
  matched.show = true
  setTimeout(() => {
    matched.show = false
  }, 3000)
}
function onNope() {
}
</script>

<template>
  <div h-full flex flex-col items-center gap-1>
    <div
      :class="matchBgCls"
      fixed bottom-0 left-0 right-0 top-0 z-10 flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat text-4xl text-green-3 font-bold transition transition-duration-500
    >
      <div :class="matchTxtCls" transition transition-delay-500>
        <p>
          <em>It's a</em>
        </p>
        <p text-8xl>
          <em>Match !</em>
        </p>
      </div>
    </div>
    <div w-full flex justify-start>
      <Woofle />
    </div>
    <div
      w-full flex flex-1 items-center justify-center
    >
      <div flex gap-4>
        <div i-emojione-loudly-crying-face />
        没有小狗啦~
      </div>
      <WoofleCard v-for="(puppy, index) in puppies" :key="index" class="woofle-card" :puppy="puppy" @like="onLike" @nope="onNope" />
    </div>
    <WoofleFooter />
  </div>
</template>

<style scoped>
.woofle-card {
  transition: scale 0.3s ease-in-out;
  scale: 0.95;
}
.woofle-card:last-child {
  transition: scale 0.3s ease-in-out;
  scale: 1;
}
.matched-bg {
  background-image: v-bind(matchedImg);
}
</style>
