import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import mixins from '@/mixins/priceFormat';
import ProductView from '@/components/ProductView.vue';

describe('ProductView.vue', () => {
  it('renders props.product when passed', () => {
    const product = {
      id: 1,
      name: 'Şampuan',
      price: '13',
      currency: 'TRY',
      image: 'https://cdn.glitch.com/a28552e7-44e1-4bbd-b298-5745e70c2209%2Fsampuan.jpeg?v=1561027551321',
    };
    const wrapper = mount(ProductView, {
      propsData: { product },
    });
    expect(wrapper.find('.card-title').text()).equal(product.name);
    expect(wrapper.find('.card-text').text()).equal(mixins.methods.priceFormat(product.price));
    expect(wrapper.find('.image').attributes('src')).equal(product.image);
  });
});
