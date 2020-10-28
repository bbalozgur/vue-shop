<template>
  <div class="card">
 <img class="image" :src="product.image" :alt="product.name" />
  <div class="card-body">
    <h5 class="card-title">{{ product.name }}</h5>
    <p class="card-text">{{ priceFormat(product.price) }}</p>
    <button class="btn btn-primary" @click='addToCartRedirect(product)'>ADD BASKET</button>
  </div>
</div>
</template>

<script>
import { mapMutations } from 'vuex';
import priceFormat from '@/mixins/priceFormat';

export default {
  name: 'ProductView',
  mixins: [priceFormat],
  props: {
    product: Object,
  },
  methods: {
    ...mapMutations(['addToCart']),
    addToCartRedirect(product) {
      this.addToCart(product);
      this.$router.push('cart');
    },
  },
};
</script>

<style lang="scss" scoped>
.image {
  width: 100%;
  }

  .card-title {
    height: 48px;
    line-height: 24px;
  }
</style>
