<script>    

import {page} from '$app/stores';
const reviewsId = $page.params.reviewsId;
const productsId = $page.params.productsId;

console.log(reviewsId);
console.log(productsId);
</script>

<h1> You are viewing review {reviewsId} for product {productsId}</h1>