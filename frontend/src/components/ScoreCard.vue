<script setup lang="ts">
interface Props {
  label: string
  value: number
  color: string
  layout?: 'start' | 'between'
}
const props = defineProps<Props>()
</script>

<template>
  <div :class="['w-full rounded-xl bg-gray-50 border border-gray-100 p-4 flex justify-between items-center',
    props.layout === 'start'
      ? 'justify-between items-start relative'
      : 'justify-between items-center']">
    <!-- Header with colored circle + label -->
    <div class="flex items-center space-x-2 mb-1">
      <!-- circle -->
      <span class="inline-block w-4 h-4 rounded-full" :style="{ backgroundColor: props.color }" />
      <!-- label -->
      <span class="text-[#535151] font-inter font-semibold text-xl leading-[120%] tracking-[-0.5px] capitalize">
        {{ props.label }}
      </span>
    </div>

    <!-- Value -->
    <span :class="['text-[#0A0A0A]',
      props.layout === 'start'
        ? 'absolute bottom-2.5 right-5 font-inter font-semibold text-[56px] leading-[120%] tracking-[-2px]'
        : 'font-inter font-semibold text-[28px] leading-[120%] tracking-[-1px] capitalize']">
      {{ props.value }}
    </span>
  </div>
</template>
