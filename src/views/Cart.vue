<template>
<div class="columns">
  <div class="card-title"> My Cart </div>
  <div class="column" v-for='product in cart' :key='product.id'>
    <div class="card-container">
      <div class="card-image">
        <img :src="product.image" :alt="product.name">
        <div class="cart-counter">
          <button class="counter-up" @click="addToCart(product)">+</button>
          <input type="text" v-model="product.quantity" readonly>
          <button class="counter-down" @click="removeFromCart(product)">-</button>
        </div>
      </div>
      <div class="card-content">
        <div class="card-description"> {{ product.name }} </div>
        <div class="card-price">
          {{ product.price }}
        </div>
        <button class="card-remove" @click="removeProduct(product)">
          REMOVE
        </button>
      </div>
    </div>
  </div>
  <CardOrder />
</div>
</template>
<script>
import { mapState, mapMutations } from 'vuex';
import CardOrder from '@/components/CardOrder.vue';

export default {
  name: 'Cart',
  components: {
    CardOrder,
  },
  computed: {
    ...mapState(['cart']),
  },
  methods: {
    ...mapMutations(['addToCart', 'removeFromCart', 'removeProduct']),
  },
};
</script>

<style lang="scss" scoped>
  .card-container {
    display: flex;
    align-items: center;

    .card-image {
      display: block;
      position: relative;
      width: 200px;
      height: 200px;
    }

    .card-content {
      display: flex;
      flex-direction: column;
      flex: 1;
      height: 200px;
      justify-content: space-around;

      .card-description {
        text-align: left;
      }
      .card-price {
          display: flex;
      }

      .card-remove {
        width: 80px;
      }
    }
  }
</style>
