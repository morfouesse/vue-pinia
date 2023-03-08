import { computed, type ComputedRef, onMounted, onUnmounted, ref } from 'vue'

export class UtilsService {
  public useBreakpoints(): ComputedRef<string | null> {
    const windowWidth = ref(window.innerWidth)
    const onWidthChange = () => (windowWidth.value = window.innerWidth)
    onMounted(() => window.addEventListener('resize', onWidthChange))
    onUnmounted(() => window.removeEventListener('resize', onWidthChange))
    const type = computed(() => {
      if (windowWidth.value < 550) return 'xs'
      if (windowWidth.value >= 550 && windowWidth.value < 1200) return 'md'
      if (windowWidth.value >= 1200) return 'lg'
      return null // This is an unreachable line, simply to keep eslint happy.
    })
    return type
  }

  public formatDateHourSecond(): string {
    return 'YYYY-MM-DD HH:mm:ss'
  }
}
