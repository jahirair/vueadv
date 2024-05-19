const app = Vue.createApp({
  data() {
    return {
      product: "Socks",
      brand: "Gomti",
      description: "Very comfortable socks.",
      // image: "./assets/images/portfolio.png",(commented for get from computed proprty)
      selectedVariantIndex: 0, //(used in computed proprty for image and stock on mouseover)
      outStockImage: "./assets/images/blog-5.jpg",
      url: "http://www.facebook.com",
      // inStock: false,(commented for get from computed proprty)
      inventory: 100,
      onSale: true,
      details: ["50% Cotton", "30% Wool", "20% Polyster"],
      variants: [
        {
          id: 2222,
          color: "green",
          image: "./assets/images/portfolio.png",
          quantity: 50,
        },
        {
          id: 3333,
          color: "blue",
          image: "./assets/images/instagram-4.jpg",
          quantity: 0,
        },
      ],
      sizes: ["X", "L", "XL", "XXL"],
      cart: 0,
    };
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },
    deleteFromCart() {
      this.cart -= 1;
    },
    changeImage(variantImage) {
      this.image = variantImage;
    },

    changeVariant(index) {
      this.selectedVariantIndex = index;
      // console.log(index);
    },
  },
  computed: {
    title() {
      return this.brand + " " + this.product;
    },
    image() {
      return this.variants[this.selectedVariantIndex].image;
    },

    inStock() {
      return this.variants[this.selectedVariantIndex].quantity;
    },
    onSaleProduct() {
      return this.brand + " " + this.product + " " + "is On Sale";
    },
  },
});
// app.mount("#app");
