<!-- src/components/ScoreCircle.vue -->
<template>
  <svg viewBox="0 0 190 190" class="score-circle w-[280px] md:w-[300px] lg:w-[320px] xl:w-[422px]">
    <!-- Draw three concentric rings -->
    <g transform="rotate(-87 90 90)">
      <circle v-for="(r, i) in radii" :key="i" :r="r" cx="90" cy="90" fill="none" :stroke="colors[i]" stroke-width="13"
        :stroke-dasharray="circumference(r)"
        :stroke-dashoffset="circumference(r) - (circumference(r) * values[i] / 100)" stroke-linecap="round"
        :opacity="[1, 0.8, 0.7][i]" style="transition: stroke-dashoffset 0.7s cubic-bezier(.7,0,.3,1)" />
    </g>
  </svg>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue'

/** Props interface */
interface Props {
  yourScore: number
  average: number
  target: number
}

/** Grab props */
const props = defineProps<Props>()

/** Array of the three scores */
const values = computed(() => [
  props.yourScore,
  props.average,
  props.target
])

/** Stroke colors for each ring (outer → inner) */
const colors = ['#edc727', '#3b60e4', '#588157']

/** Radii for each circle (outer → inner) */
const radii = [82, 56, 32]

/** Circumference helper */
const circumference = (r: number) => 2 * Math.PI * r
</script>