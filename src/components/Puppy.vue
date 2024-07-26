<template>
  <div v-for="(puppy, index) in puppyDb" :key="index" h-70
    w-70 rounded-2xl overflow-hidden>
    <img :src="puppy.avatar" h-full w-full object-cover />
  </div>
</template>

<script setup
  lang="ts">
  import { puppyDb } from '~/composables/constants';
</script>

<style scoped></style>
