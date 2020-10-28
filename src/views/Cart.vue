<template>
  <div>
    <div class="card-title">My Cart ({{ productCount }})</div>
    <div class="card-container" v-for="product in cart" :key="product.id">
      <div class="card-image">
        <img :src="product.image" :alt="product.name" />
        <div class="card-counter">
          <button type="button" class="btn btn-danger counter-up" @click="addToCart(product)">
            +
          </button>
          <input type="text" class="count-input" v-model="product.quantity" readonly />
          <button
            type="button"
            class="btn btn-danger counter-down"
            @click="removeFromCart(product)"
          >
            -
          </button>
        </div>
      </div>
      <div class="card list-group">
        <a href="#" class="card list-group-item list-group-item-action">
          <div class="d-flex w-100 justify-content-between" style="flex-direction:column">
            <h5 class="mb-1">{{ product.name }}</h5>
            <small class="cart-price"> {{ priceFormat(product.price) }}</small>
            <button type="button" class="btn btn-dark card-remove" @click="removeProduct(product)">
              REMOVE
            </button>
          </div>
        </a>
      </div>
    </div>
    <CardOrder />
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex';
import CardOrder from '@/components/CardOrder.vue';
import priceFormat from '@/mixins/priceFormat';

export default {
  name: 'Cart',
  mixins: [priceFormat],
  components: {
    CardOrder,
  },
  computed: {
    ...mapState(['cart']),
    productCount() {
      return Object.keys(this.cart).length;
    },
  },
  methods: {
    ...mapMutations(['addToCart', 'removeFromCart', 'removeProduct']),
  },
};
</script>

<style lang="scss" scoped>
.card-title {
  text-align: left;
  padding: 10px;
  border-bottom: 1px solid orange;
  padding: 10px 10px;
}
.card-container {
  display: flex;
  align-items: center;
  border-bottom: 1px solid orange;
  padding: 10px 0;

  .card-image {
    display: block;
    position: relative;
    width: 200px;

    img {
      width: 100%;
    }
  }

  .card-counter {
    display: flex;
    padding-left: 15px;

    .count-input {
      width: 60px;
      margin: 0 15px;
      text-align: center;
      border-radius: 5px;
      border: 1px solid #3e3b3b;
      color: #3e3b3b;
    }

    .counter-up,
    .counter-down {
      width: 35px;
    }
  }

  .card {
    border: none;

    .list-group-item {
      border: none;

      .cart-price {
        margin: 20px 0;
        font-size: 16px;
        text-align: left;
      }

      .card-remove {
        width: 80px;
        font-size: 12px;
      }
    }
  }
}
</style>
