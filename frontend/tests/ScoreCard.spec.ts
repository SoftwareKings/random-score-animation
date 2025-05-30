// tests/ScoreCard.spec.ts
import { mount } from '@vue/test-utils'
import ScoreCard from '../src/components/ScoreCard.vue'

describe('ScoreCard.vue', () => {
  const baseProps = {
    label: 'Test Label',
    value:  42,
    color:  'rgb(18, 58, 188)'
  }

  it('renders the label text and value', () => {
    const wrapper = mount(ScoreCard, { props: baseProps })

    // The label span should contain "Test Label"
    expect(wrapper.text()).toContain('Test Label')

    // The value span should contain "42"
    expect(wrapper.text()).toContain('42')
  })

  it('applies the circle backgroundColor from props.color', () => {
    const wrapper = mount(ScoreCard, { props: baseProps })

    // Find the circle <span> (first inline-block)
    const circle = wrapper.find('span.inline-block')
    expect(circle.exists()).toBe(true)

    // The style attribute should include our color
    const style = circle.attributes('style') || ''
    expect(style).toContain('background-color: rgb(18, 58, 188)')
  })

  it('uses the "between" layout by default', () => {
    const wrapper = mount(ScoreCard, { props: baseProps })

    // Root div should have items-center (the default branch)
    const rootClasses = wrapper.get('div').classes()
    expect(rootClasses).toEqual(
      expect.arrayContaining(['flex', 'justify-between', 'items-center'])
    )

    // Value span should have the 28px text size class
    const valueSpan = wrapper.findAll('span').at(2)!
    const valueClasses = valueSpan.classes()
    expect(valueClasses).toEqual(
      expect.arrayContaining(['font-inter', 'font-semibold', 'text-[28px]'])
    )
  })

  it('applies the "start" layout when props.layout="start"', () => {
    const wrapper = mount(ScoreCard, {
      props: { ...baseProps, layout: 'start' }
    })

    // Root div should include 'items-start' and 'relative'
    const rootClasses = wrapper.get('div').classes()
    expect(rootClasses).toEqual(
      expect.arrayContaining(['justify-between', 'items-start', 'relative'])
    )

    // Value span should have the 56px text size class and absolute positioning
    const valueSpan = wrapper.findAll('span').at(2)!
    const valClasses = valueSpan.classes()
    expect(valClasses).toEqual(
      expect.arrayContaining([
        'absolute',
        'bottom-2.5',
        'right-5',
        'text-[56px]'
      ])
    )
  })
})
