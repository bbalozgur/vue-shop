<template>
    <div class="mt-2">
        <h1 id="total" >{{ priceFormat(cartTotal) }}</h1>
        <button type="button" class="btn btn-success"  @click='placeOrder()'>PLACE ORDER</button>
    </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
import axios from 'axios';
import priceFormat from '@/mixins/priceFormat';

export default {
  name: 'CartOrder',
  mixins: [priceFormat],
  methods: {
    ...mapMutations(['emptyCart']),
    async placeOrder() {
      const BASE_URL = 'https://nonchalant-fang.glitch.me/order';
      const postData = [];
      // eslint-disable-next-line
      for(const item in this.cart) {
        postData.push({
          id: item.id,
          amount: item.quantity,
        });
      }
      try {
        const response = await axios.post(BASE_URL, postData);
        alert(response.data.message);

        if (response.data.status === 'success') {
          this.emptyCart();
        }
      } catch (e) {
        alert(e.response.data.message);
      }
    },
  },
  computed: {
    ...mapState(['cart']),
    cartTotal() {
      const reducer = (accumulator, product) => {
        const price = parseFloat(product.price);
        return accumulator + price * product.quantity;
      };
      return Object.values(this.cart).reduce(reducer, 0);
    },
  },
};
</script>

<style>

</style>
