<template>
  <img
      :src="base_URL+src"
      :alt="alt"
      class="parallax-image"
      :data-direction="direction"
      :style="combinedStyle"
  />
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref, computed } from 'vue'

type ResponsiveValue<T> = T | { desktop?: T; tablet?: T; mobile?: T }

const props = defineProps<{
  src: string
  alt?: string
  direction?: 'left' | 'right' | 'up' | 'down'
  offsetMultiplier?: ResponsiveValue<number>
  top?: ResponsiveValue<string>
  width?: ResponsiveValue<string>
  height?: ResponsiveValue<string>
  left?: ResponsiveValue<string>
  right?: ResponsiveValue<string>
}>()

const styleObject = ref({ transform: '' })
const base_URL = import.meta.env.BASE_URL

type ResponsiveObject<T> = {
  desktop?: T
  tablet?: T
  mobile?: T
}

function isResponsiveObject<T>(val: any): val is ResponsiveObject<T> {
  return (
      val &&
      typeof val === 'object' &&
      ('desktop' in val || 'tablet' in val || 'mobile' in val)
  )
}




const getResponsiveValue = <T>(val?: ResponsiveValue<T>): T | undefined => {
  const width = window.innerWidth
  if (!val || !isResponsiveObject<T>(val)) return val
  if (width <= 480) return val.mobile
  if (width <= 768) return val.tablet
  return val.desktop
}



// 狀態
const responsiveValues = ref({
  top: getResponsiveValue(props.top) ?? '35vw',
  width: getResponsiveValue(props.width) ?? '55%',
  height: getResponsiveValue(props.height) ?? 'auto',
  left: getResponsiveValue(props.left),
  right: getResponsiveValue(props.right),
  offset: getResponsiveValue(props.offsetMultiplier) ?? 0.5
})
const direction = props.direction ?? 'left'
let ticking = false
const scrollHandler = () => {
  if (!ticking) {
    requestAnimationFrame(() => {
      const offset = window.scrollY * (responsiveValues.value.offset ?? 0.5)

      let xOffset = 0
      let yOffset = 0

      if (direction === 'left') xOffset = -offset
      else if (direction === 'right') xOffset = offset
      else if (direction === 'up') yOffset = -offset
      else if (direction === 'down') yOffset = offset

      styleObject.value.transform = `translate3d(${xOffset}px, ${yOffset}px, 0)`
      ticking = false
    })
    ticking = true
  }
}

const resizeHandler = () => {
  responsiveValues.value.top = getResponsiveValue(props.top) ?? '35vw'
  responsiveValues.value.width = getResponsiveValue(props.width) ?? '55%'
  responsiveValues.value.height = getResponsiveValue(props.height) ?? 'auto'
  responsiveValues.value.left = getResponsiveValue(props.left) ?? '0'
  responsiveValues.value.right = getResponsiveValue(props.right) ?? '0'
  responsiveValues.value.offset = getResponsiveValue(props.offsetMultiplier) ?? 0.5
}

const combinedStyle = computed(() => ({
  ...styleObject.value,
  top: responsiveValues.value.top,
  width: responsiveValues.value.width,
  height: responsiveValues.value.height,
  left: responsiveValues.value.left,
  right: responsiveValues.value.right
}))

onMounted(() => {
  window.addEventListener('scroll', scrollHandler)
  window.addEventListener('resize', resizeHandler)
  scrollHandler()
  resizeHandler()
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', scrollHandler)
  window.removeEventListener('resize', resizeHandler)
})
</script>

<style scoped>
.parallax-image {
  position: absolute;
  transition:  transform 0.2s cubic-bezier(0.25, 0.1, 0.25, 1);
  pointer-events: none;
}
</style>
