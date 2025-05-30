<script setup lang="ts">
import { RefreshCw } from 'lucide-vue-next'
const emit = defineEmits(['click'])
const props = defineProps<{ color: string }>()
</script>

<template>

  <button @click="$emit('click')" :style="{ backgroundColor: props.color }"
    class="inline-flex items-center justify-center w-[153px] h-[48px] rounded-lg mb-0 pt-3 pr-4 pb-3 pl-5 gap-2 border-0 outline-none focus:!bg-blue-700 focus:ring-2 focus:ring-blue-300 focus:ring-offset-1 hover:!bg-blue-600 hover:cursor-pointer">
    <span class="font-medium text-base leading-normal tracking-normal text-[#1A1A1A]">
      Randomize
    </span>
    <RefreshCw class="w-5 h-5" />
  </button>
</template>
