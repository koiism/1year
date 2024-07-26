<template>
  <main
    p="x-4 y-4"
    text="center gray-700 dark:gray-200" h-full font-sans
  >
    <RouterView v-slot="{ Component }">
      <Transition name="fade" mode="out-in" :duration="100">
        <component :is="Component" />
      </Transition>
    </RouterView>
    <TheFooter />
  </main>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
