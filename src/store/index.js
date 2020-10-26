import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: {},
  },
  mutations: {
    addToCart(state, product) {
      const tempCart = { ...state.cart };
      const tempProduct = product;
      // if we has this product already
      // increase quantity
      if (state.cart[product.id]) {
        tempProduct.quantity += 1;
      } else {
        tempProduct.quantity = 1;
      }
      tempCart[product.id] = tempProduct;

      state.cart = tempCart;
    },
    removeFromCart(state, product) {
      const tempCart = { ...state.cart };
      const tempProduct = product;
      // if we has this product already
      // increase quantity
      if (product.quantity === 1) {
        delete tempCart[product.id];
      } else {
        tempProduct.quantity -= 1;
        tempCart[product.id] = tempProduct;
      }

      state.cart = tempCart;
    },
    removeProduct(state, product) {
      const tempCart = { ...state.cart };
      delete tempCart[product.id];
      state.cart = tempCart;
    },
  },
  actions: {
  },
});
