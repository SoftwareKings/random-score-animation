<template>
  <div class="rounded-2xl shadow-lg border border-gray-200 bg-white
           w-full max-w-[1280px] mx-auto
           h-auto md:h-[832px]
           gap-6 md:gap-[91px]
           pt-6 sm:pt-[58px] pb-6 sm:pb-[20px]
           px-4 sm:px-6 md:px-8 lg:pl-[98px] lg:pr-[97px]">
    <div class="w-full h-auto gap-[72px]">
      <div
        class="w-full block sm:flex justify-between items-end pb-3 md:pb-5 lg:pb-8 xl:pb-[38px] gap-8 lg:px-[59.5px]">
        <div class="flex flex-col justify-between mb-4 sm:mb-0 ">
          <span class="font-inter font-[600] text-2xl leading-[120%] tracking-[-0.5px] capitalize text-[#0A0A0A]">
            Random Score Animation
          </span>
          <p class="font-inter font-normal text-sm sm:text-[15px] md:text-lg xl:text-xl leading-normal tracking-normal text-[#535151]
                     mt-2 md:mt-4 w-full xl:w-[550px] lg:mt-[24px]">
            This graph shows a random set of scores, and can be regenerated using the “Randomize” button.
          </p>
        </div>
        <RandomizeButton color="#EDC727" @click="handleRandomize" />
      </div>
      <div class="border-t border-gray-300 w-full mx-auto"></div>
      <div
        class="mt-[72px] flex flex-col md:flex-row items-start md:items-between justify-between h-fit w-full max-w-[1085px] mx-auto md:gap-[50px] gap-8 lg:gap-[70px] xl:gap-[139px] px-0 md:px-6 lg:px-10 xl:pl-[97.5px] xl:pr-[97.5px]">
        <div class="w-full md:w-1/2 h-auto md:h-[392px]">
          <div class="flex flex-col min-[480px]:flex-row md:flex-col gap-4">
            <div class="w-full min-[480px]:w-1/2 md:w-full lg:pt-[24px]">
              <ScoreCard class="h-[160px] md:h-[216px]" label="Your Score" :value="yourScore" color="#edc727"
                layout="start" />
            </div>
            <div class="w-full min-[480px]:w-1/2 md:w-full flex flex-col gap-4">
              <ScoreCard class="h-[72px]" label="Average" :value="average" color="#3b60e4" layout="between" />
              <ScoreCard class="h-[72px]" label="Target" :value="target" color="#588157" layout="between" />
            </div>
          </div>
        </div>
        <div class="w-[300px] md:w-[320px] lg:w-[380px] xl:w-[422px] m-auto lg:pt-[9px]">
          <ScoreCircle :your-score="yourScore" :average="average" :target="target" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import ScoreCard from '../components/ScoreCard.vue'
import ScoreCircle from '../components/ScoreCircle.vue'
import RandomizeButton from '../components/RandomizeButton.vue'
import { useScoreStore } from '../stores/scoreStore'

export default defineComponent({
  components: { ScoreCard, ScoreCircle, RandomizeButton },
  setup() {
    const store = useScoreStore()
    const { yourScore, average, target } = storeToRefs(store)
    onMounted(() => {
      store.fetchScores()
    })
    const handleRandomize = () => {
      store.randomizeScores()
    }
    return {
      yourScore,
      average,
      target,
      handleRandomize
    }
  }
})
</script>
