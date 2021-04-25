import { mount, createLocalVue } from '@vue/test-utils'
import vuesax from 'vuesax'
import Table from '@/components/Table.vue'

describe('Table', () => {
  let localVue

  beforeEach(() => {
    const Vue = createLocalVue()
    Vue.use(vuesax)
    localVue = Vue
  })

  test('is a Vue instance', () => {
    const wrapper = mount(Table, { localVue })
    expect(wrapper.vm).toBeTruthy()
  })
})
