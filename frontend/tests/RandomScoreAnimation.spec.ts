// tests/RandomScoreAnimation.spec.ts
import { mount, VueWrapper } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import RandomScoreAnimation from '../src/components/RandomScoreAnimation.vue'
import { useScoreStore } from '../src/stores/scoreStore'

describe('RandomScoreAnimation.vue', () => {
  let wrapper: VueWrapper<any>

  beforeEach(() => {
    wrapper = mount(RandomScoreAnimation, {
      global: {
        plugins: [
          createTestingPinia({
            stubActions: true,
            initialState: {
              scoreStore: {
                yourScore: 10,
                average:   20,
                target:    30,
              }
            }
          })
        ],
        stubs: ['ScoreCard', 'ScoreCircle', 'RandomizeButton']
      }
    })
  })

  it('calls fetchScores once on mount', () => {
    const store = useScoreStore()
    expect(store.fetchScores).toHaveBeenCalledTimes(1)
  })

  it('renders three ScoreCard stubs', () => {
    const cards = wrapper.findAllComponents({ name: 'ScoreCard' })
    expect(cards).toHaveLength(3)
  })

  it('passes the right props to RandomizeButton', () => {
    const btn = wrapper.findComponent({ name: 'RandomizeButton' })
    expect(btn.exists()).toBe(true)
    expect(btn.props('color')).toBe('#EDC727')
  })

  it('calls randomizeScores when RandomizeButton emits click', async () => {
    const btn = wrapper.findComponent({ name: 'RandomizeButton' })
    await btn.vm.$emit('click')
    const store = useScoreStore()
    expect(store.randomizeScores).toHaveBeenCalledTimes(1)
  })

  it('renders one ScoreCircle stub', () => {
    const circle = wrapper.findComponent({ name: 'ScoreCircle' })
    expect(circle.exists()).toBe(true)
  })
})
