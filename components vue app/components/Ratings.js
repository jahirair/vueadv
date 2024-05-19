app.component("ratings", {
  template: `<div class="container">
  <div class="row">
    
    <div class="col-md-12">
      <h1>Product review form</h1>

      <form @submit.prevent="onSubmit">
        <div class="form-group">
          <label for="exampleFormControlInput1">Name</label>
          <input
            type="text"
            class="form-control my-3"
            id="name"
            placeholder="Your Name"
            v-model="name"
          />
        </div>
        <div class="form-group">
          <label for="exampleFormControlSelect1">Ratings</label>
          <select
            class="form-control my-3"
            id="rating"
            name="rating"
            v-model.number="rating"
          >
            <option>Select Rating</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>

        <div class="form-group">
          <label for="exampleFormControlTextarea1">Review Text</label>
          <textarea
            name="review"
            class="form-control"
            id="review"
            rows="3"
            v-model="review "
          ></textarea>
        </div>

        <button type="submit" class="btn btn-primary my-3">
          Submit
        </button>
      </form>
    </div>
  </div>
</div>`,

  data() {
    return {
      name: "",
      rating: "",
      review: null,
    };
  },
  methods: {
    onSubmit() {
      if (!this.name || !this.rating || !this.review) {
        alert("Review is incomplete. Please fill out every field.");
        return;
      }
      let productReview = {
        name: this.name,
        rating: this.rating,
        review: this.review,
      };
      this.$emit("review-submitted", productReview);
      (this.name = ""), (this.rating = ""), (this.review = null);
    },
  },
});
