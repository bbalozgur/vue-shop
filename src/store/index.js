import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: {},
  },
  mutations: {
    addToCart(state, product) {
      const cartProduct = product;
      // if we has this product already
      // increase quantity
      if (state.cart[product.id]) {
        cartProduct.quantity += 1;
      } else {
        cartProduct.quantity = 1;
      }

      Vue.set(state.cart, product.id, cartProduct);
    },
  },
  actions: {
  },
});
