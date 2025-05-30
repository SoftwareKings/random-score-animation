// tests/RandomizeButton.spec.ts

import { mount } from '@vue/test-utils'
import RandomizeButton from '../src/components/RandomizeButton.vue'
import { RefreshCw } from 'lucide-vue-next'

describe('RandomizeButton.vue', () => {
  const defaultProps = { color: 'rgb(255, 0, 0)' }

  it('renders the label and applies the backgroundColor style', () => {
    const wrapper = mount(RandomizeButton, { props: defaultProps })

    // 1) The button text should be "Randomize"
    expect(wrapper.text()).toContain('Randomize')

    // 2) The inline style attribute should include our hex color
    //    We check the raw "style" string to avoid browser normalization of rgb(...)
    const styleAttr = wrapper.attributes('style') || ''
    expect(styleAttr).toContain('background-color: rgb(255, 0, 0)')
  })

  it('emits a "click" event when clicked', async () => {
    const wrapper = mount(RandomizeButton, { props: defaultProps })

    // Trigger a click on the <button> element
    await wrapper.get('button').trigger('click')

    // The component should have emitted one "click" event
    expect(wrapper.emitted()).toHaveProperty('click')
    expect(wrapper.emitted('click')![0]).toEqual([])  
    // [0] is the first emission; payload is an empty array since we don't emit any args
  })

  it('renders the RefreshCw icon component', () => {
    const wrapper = mount(RandomizeButton, { props: defaultProps })

    // Find the imported icon by its component constructor
    const icon = wrapper.findComponent(RefreshCw)
    expect(icon.exists()).toBe(true)

    // Optionally verify its size classes
    expect(icon.classes()).toEqual(expect.arrayContaining(['w-5', 'h-5']))
  })
})
