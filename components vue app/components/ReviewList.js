app.component("review-list", {
  props: ["reviews"],
  template: `
    <div class="row">
    <div class="col-md-12">
      <h1>Reviews</h1>
      <ul>
        <li v-for="(review,index) in reviews" :key="index">{{ review.name }} gave {{review.rating}} star review with the comment "{{review.review}}"</li>
      </ul>
      
    </div>
    </div>`,
});
