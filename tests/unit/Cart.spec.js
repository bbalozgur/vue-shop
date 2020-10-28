import { shallowMount, createLocalVue } from '@vue/test-utils';
import { expect } from 'chai';
import Vuex from 'vuex';
import Cart from '@/views/Cart.vue';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('Cart.vue', () => {
  let store;
  const product1 = 'Şampuan';
  const product2 = 'Deodorant';
  beforeEach(() => {
    store = new Vuex.Store({
      state: {
        cart: {
          1: {
            id: 1,
            name: product1,
            price: '13',
            currency: 'TRY',
            image: 'https://cdn.glitch.com/a28552e7-44e1-4bbd-b298-5745e70c2209%2Fsampuan.jpeg?v=1561027551321',
            quantity: 2,
          },
          2: {
            id: 2,
            name: product2,
            price: '26',
            currency: 'TRY',
            image: 'https://cdn.glitch.com/a28552e7-44e1-4bbd-b298-5745e70c2209%2Fdeodorant.jpeg?v=1561027551696',
            quantity: 1,
          },
        },
      },
    });
  });

  it('render product from state', () => {
    const wrapper = shallowMount(Cart, { store, localVue });
    expect(wrapper.text()).to.contain(product1);
    expect(wrapper.text()).to.contain(product2);
  });
  it('render product count', () => {
    const wrapper = shallowMount(Cart, { store, localVue });
    const count = Object.keys(store.state.cart).length;
    expect(wrapper.find('.card-title').text()).equal(`My Cart (${count})`);
  });
});
