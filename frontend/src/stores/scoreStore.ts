import { defineStore } from 'pinia'
import * as scoreApi from '../services/scoreApi'

export const useScoreStore = defineStore('score', {
  state: () => ({
    yourScore: 0,
    average:   0,
    target:    0
  }),
  actions: {
    async fetchScores() {
      const scores = await scoreApi.fetchScores()
      Object.assign(this, scores)
    },
    async randomizeScores() {
      const scores = await scoreApi.randomizeScores()
      Object.assign(this, scores)
    }
  }
})
