import { shallowMount, createLocalVue } from '@vue/test-utils';
import { expect } from 'chai';
import Vuex from 'vuex';
import CardOrder from '@/components/CardOrder.vue';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('CartOrder.vue', () => {
  let store;

  beforeEach(() => {
    store = new Vuex.Store({
      state: {
        cart: {
          1: {
            id: 1,
            name: 'Şampuan',
            price: '13',
            currency: 'TRY',
            image: 'https://cdn.glitch.com/a28552e7-44e1-4bbd-b298-5745e70c2209%2Fsampuan.jpeg?v=1561027551321',
            quantity: 2,
          },
          2: {
            id: 2,
            name: 'Deodorant',
            price: '26',
            currency: 'TRY',
            image: 'https://cdn.glitch.com/a28552e7-44e1-4bbd-b298-5745e70c2209%2Fdeodorant.jpeg?v=1561027551696',
            quantity: 1,
          },
        },
      },
    });
  });

  it('calculates total price', () => {
    const wrapper = shallowMount(CardOrder, { store, localVue });
    expect(wrapper.find('#total').text()).equal('52.00₺');
  });
});
