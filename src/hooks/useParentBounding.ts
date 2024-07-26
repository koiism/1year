export function useParentBounding(el: Ref<HTMLElement | undefined>) {
  const parentRef = ref<HTMLElement>()
  onMounted(() => {
    if (el.value?.parentElement) {
      parentRef.value = el.value.parentElement
    }
  })
  return useElementBounding(parentRef)
}
