import { mount } from '@vue/test-utils';
import Navbar from '@/components/Navbar.vue';

describe('Navbar', () => {
  it('is a Vue instance', () => {
    const wrapper = mount(Navbar);
    expect(wrapper.vm).toBeTruthy();
  });
});
