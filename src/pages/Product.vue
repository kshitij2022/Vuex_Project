<template>
  <!-- <div>Product {{id}}</div> -->
  <div class="row m-2">
    <div class="col-4 border border-dark">
        <img src="https://rukminim1.flixcart.com/image/800/960/kxxl9jk0/watch/9/8/x/1-hl-2022-new-trending-full-black-round-waterproof-gym-fitness-original-imaga9u8te7hghvz.jpeg?q=50" class="img-fluid" style="max-height:450px" alt="">
    </div>

    <div class="col-8">
        <h1>Product Title</h1>
        <h3>$23</h3>
        <input type="text" class="text-center col-1 m-2 p-1">
        <button class="btn btn-dark">Add To Cart</button>
            <p class="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, odio!</p>
    </div>
  </div>
</template>

<script>
export default {
    props:['id']
}
</script>

<style>

</style>