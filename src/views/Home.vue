<template>
  <div class="columns">
    <ProductView
      class="column is-4"
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<script>
import axios from 'axios';
import ProductView from '@/components/ProductView.vue';

export default {
  name: 'Home',
  components: {
    ProductView,
  },
  data() {
    return {
      products: [],
    };
  },
  async created() {
    const BASE_URL = 'https://nonchalant-fang.glitch.me/listing';
    const response = await axios.get(BASE_URL);
    this.products = response.data;
  },
};
</script>
