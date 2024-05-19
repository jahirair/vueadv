app.component("product-details", {
  props: ["details_product"],
  template: `<p>Product Details</p>
              <ul>
                <li v-for="detail in details">{{ detail }}</li>
              </ul>

              <p>{{details_product}}</p>
`,
  data() {
    return {
      details: ["50% Cotton", "30% Wool", "20% Polyster"],
    };
  },
});
