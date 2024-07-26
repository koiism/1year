<script setup
  lang="ts"
>
defineOptions({
  name: 'IndexPage',
})

const router = useRouter()
function go() {
  router.push(`/choosePuppy`)
}
function localStorageClear() {
  localStorage.clear()
  router.push(`/choosePuppy`)
}
</script>

<template>
  <div h-full flex flex-col items-center gap-1>
    <div flex-none>
      <Woofle />
    </div>
    <div
      flex flex-1 flex-col items-center justify-center gap-2
    >
      <div>
        <div
          i-carbon-user-favorite-alt inline-block
          text-2xl
        />
        请选择你最中意的小狗
      </div>
      <p mb-10>
        <em text-sm op75>please choose your favorite
          puppy</em>
      </p>
      <button btn @click="go">
        让我康康
      </button>
      <button pt-4 text-xs @click="localStorageClear">
        重新来过
      </button>
    </div>
  </div>
</template>
