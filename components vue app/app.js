const app = Vue.createApp({
  data() {
    return {
      // cart: 0,
      cart: [], //to count product in cart
      premium: false, //to show this value in components use props in component data script
      details_product:
        "This details is from main app.js to product details compnent", //to show this value in components use props in component data script
      product: "Socks",
      brand: "Gomti",
      url: "http://www.facebook.com",
      reviews: [],
    };
  },
  methods: {
    updateCart(id) {
      // this.cart += 1;
      this.cart.push(id);
    },
    deleteCart(id) {
      this.cart.pop(id);
    },
    addReview(review) {
      // alert(review.name);
      // console.log(review);
      this.reviews.push(review);
    },
  },
  computed: {},
});
// app.mount("#app");
