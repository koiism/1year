<script setup lang="ts">
defineProps<{
  avatar: string
  name: string
  latestMessage: string
  waiting: boolean
}>()
</script>

<template>
  <RouterLink :to="`/chat/${name}`" box-content h-20 w-full flex items-center gap-3 py-2>
    <div h-20 w-20 flex flex-none items-center justify-center rounded-full bg-gray-300>
      <img :src="avatar" h-full w-full rounded-full object-cover>
    </div>
    <div h-full w-full flex flex-col items-start justify-between overflow-hidden border-b border-b-1 border-b-coolgray-7 py-2>
      <div w-full flex items-center justify-between text-sm>
        <div text-lg font-bold>
          {{ name }}
        </div>
        <div v-if="waiting" rounded-full bg-white px-2 py-1 text-xs text-black>
          等你回应
        </div>
      </div>
      <div w-full overflow-hidden text-ellipsis whitespace-nowrap text-align-start>
        <div
          v-if="!waiting"
          i-streamline-interface-arrows-bend-up-left-3-arrow-bend-curve-change-direction-up-to-left inline-block text-size-2
        />
        {{ latestMessage }}
      </div>
    </div>
  </RouterLink>
</template>

<style scoped>

</style>
