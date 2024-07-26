<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { usePuppyStore } from '~/stores/puppy'

const puppyStore = usePuppyStore()
const { matchedPuppies } = storeToRefs(puppyStore)
</script>

<template>
  <div h-full flex flex-col items-center gap-1>
    <div w-full flex justify-center>
      <Woofle />
    </div>
    <div w-full flex flex-1 flex-col items-start justify-start>
      <div>消息</div>
      <PuppyChatCard
        v-for="puppy in matchedPuppies" :key="puppy.name" :avatar="puppy.avatar" :name="puppy.name" :latest-message="puppy.lastMessage" :waiting="puppy.waiting"
      />
    </div>
    <WoofleFooter />
  </div>
</template>

<style scoped>

</style>
