export default {
  methods: {
    priceFormat(price) {
      return `${parseFloat(price).toFixed(2)}₺`;
    },
  },
};
