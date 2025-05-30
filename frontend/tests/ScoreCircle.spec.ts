// tests/ScoreCircle.spec.ts
import { mount } from '@vue/test-utils'
import ScoreCircle from '../src/components/ScoreCircle.vue'

describe('ScoreCircle.vue', () => {
  // match the component’s internal constants
  const radii  = [82, 56, 32]
  const colors = ['#edc727', '#3b60e4', '#588157']

  // helper to compute circumference
  const circumference = (r: number) => 2 * Math.PI * r

  it('renders an <svg> with three circles', () => {
    const wrapper = mount(ScoreCircle, {
      props: { yourScore: 50, average: 25, target: 75 }
    })

    // 1 SVG and inside g>circle x3
    expect(wrapper.find('svg').exists()).toBe(true)
    const circles = wrapper.findAll('circle')
    expect(circles).toHaveLength(3)
  })

  it('applies correct radii and stroke colors', () => {
    const wrapper = mount(ScoreCircle, {
      props: { yourScore: 10, average: 20, target: 30 }
    })

    const circles = wrapper.findAll('circle')
    circles.forEach((c, i) => {
      // r attribute
      expect(c.attributes('r')).toBe(String(radii[i]))
      // stroke color
      expect(c.attributes('stroke')).toBe(colors[i])
    })
  })

  it('calculates dasharray and dashoffset based on prop values', () => {
    const values = [50, 25, 75]  // yourScore, average, target
    const wrapper = mount(ScoreCircle, {
      props: { yourScore: values[0], average: values[1], target: values[2] }
    })

    const circles = wrapper.findAll('circle')
    circles.forEach((c, i) => {
      const r = radii[i]
      const circ = circumference(r)

      // stroke-dasharray === circumference
      expect(c.attributes('stroke-dasharray')).toBe(String(circ))

      // stroke-dashoffset === circ - circ*(value/100)
      const expectedOffset = circ - (circ * values[i] / 100)
      // allow small floating‐point epsilon
      const actualOffset = parseFloat(c.attributes('stroke-dashoffset') || '0')
      expect(Math.abs(actualOffset - expectedOffset)).toBeLessThan(0.001)
    })
  })
})
