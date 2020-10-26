<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-4by3">
        <img :src="product.image" :alt="product.name" />
      </figure>
    </div>
    <div class="card-content">
      <div class="content">
        {{ product.name }}
      </div>
      <div class="showcase-price" >{{ priceFormat(product.price) }}</div>
      <button class="button is-warning" @click='addToCart(product)'>ADD BASKET</button>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'ProductView',
  props: {
    product: Object,
  },
  methods: {
    ...mapMutations(['addToCart']),
    priceFormat(price) {
      return `${parseFloat(price).toFixed(2)}₺`;
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
