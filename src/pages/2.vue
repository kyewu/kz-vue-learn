<script setup lang="ts">
const value = ref(-23)
const absValue = useAbs(value)
function increment(): number {
  return value.value++
}
const a = increment()
</script>

<template>
  <div>
    {{ value }} -  {{ a }} -- {{ absValue }}
  </div>
</template>

<route lang="yaml">
  meta:
      layout: home
  </route>
