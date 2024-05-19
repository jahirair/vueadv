app.component("product-display", {
  props: { premium: { type: Boolean, required: true } },
  template: `<div class="container m-5">
        <div class="row">
          <div class="col-md-6">
            <div class="product_image">
              <!-- <div v-if="inStock"><img :src="image" alt="" /></div>
              <div v-else><img :src="outStockImage" alt="" /></div> -->
              <img :class="'out-of-stock'" :src="image" alt="" />
            </div>
          </div>
          <div class="col-md-4">
            <div class="product_info">
              <h1>{{ brand +' '+ product }}</h1>
              <h2>{{ title }}(computed property)</h2>
              <h2 v-show="onSale">{{ onSaleProduct }}(computed property)</h2>
              <p v-if="onSale" class="btn btn-danger">On Sale!!!!</p>
              <p v-if="inStock">In Stock</p>
              <p v-else>Out Stock</p>

              <p>Product Details</p>
              <ul>
                <li v-for="detail in details">{{ detail }}</li>
              </ul>

              <p>Colors</p>
              <ul>
                <!-- v-for="variant in variants" -->
                <!-- @mouseover="changeImage(variant.image)" -->
                <li
                  v-for="(variant,index) in variants"
                  :key="variant.id"
                  @mouseover="changeVariant(index)"
                  class="colored_circle"
                  :style="{backgroundColor:variant.color}"
                >
                  <!-- {{ variant.color }} (id:{{ variant.id }}) -->
                </li>
              </ul>

              <p>Sizes</p>
              <ul>
                <li v-for="size in sizes">{{ size }}</li>
              </ul>
              <p v-if="inventory>10">Inventory is full</p>
              <p v-else-if="inventory<=10 && inventory>0 ">
                Add product in Inventory
              </p>
              <p v-else>Not in Inventory</p>

              <button
                v-on:click="addToCart"
                class="btn btn-primary"
                :class="{'disabledButton':!inStock}"
                :disabled="!inStock"
              >
                Add to Cart
              </button>

              <button v-on:click="deleteFromCart" class="btn btn-primary mx-5">
                Delete Cart
              </button>
            </div>
          </div>
          <div class="col-md-2">
          <p>Shipping: {{shipping}}</p>
          
          </div>
        </div>
      </div>
    `,
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
    };
  },
  methods: {
    addToCart() {
      // this.cart += 1;
      // this.$emit("clicked-in-component"); //sending to index.html(parent) file compnent_call part
      this.$emit(
        "clicked-in-component",
        this.variants[this.selectedVariantIndex].id
      ); //sending to index.html(parent) file compnent_call part with product_id to count cart
    },
    deleteFromCart() {
      // this.cart -= 1;
      this.$emit(
        "clicked-in-component-to-delete",
        this.variants[this.selectedVariantIndex].id
      );
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
    shipping() {
      if (this.premium) {
        return "Free";
      }
      return "$" + " " + 2.99;
    },
  },
});
