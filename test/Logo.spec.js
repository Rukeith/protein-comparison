import { mount } from '@vue/test-utils'
import Table from '@/components/Table.vue'

describe('Table', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Table)
    expect(wrapper.vm).toBeTruthy()
  })
})
