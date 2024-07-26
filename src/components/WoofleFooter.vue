<script setup lang="ts">
const activeClass = 'bg-gradient-from-red bg-gradient-to-red-6 bg-gradient-to-rb'
const inactiveClass = 'bg-neutral'
const router = useRouter()
const currentPath = router.currentRoute.value.path
const isWoofleActive = computed(() => currentPath === '/choosePuppy')
const isChatActive = computed(() => currentPath === '/chat')
function goChoosePuppy() {
  router.push('/choosePuppy')
}
function goChat() {
  router.push('/chat')
}
</script>

<template>
  <div flex justify-between gap-16 px-4 py-2>
    <div i-streamline-tinder-solid :class="isWoofleActive ? activeClass : inactiveClass" text-2xl @click="goChoosePuppy" />
    <div i-streamline-chat-two-bubbles-oval-solid :class="isChatActive ? activeClass : inactiveClass" text-2xl @click="goChat" />
  </div>
</template>

<style scoped>

</style>
