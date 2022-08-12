<template>
   <div class="col-3 mt-3 p-3" style="margin:0 auto" >
        <div class="text-center border" >
            <img class="img-fluid" style="height:250px" src="https://rukminim1.flixcart.com/image/800/960/kxxl9jk0/watch/9/8/x/1-hl-2022-new-trending-full-black-round-waterproof-gym-fitness-original-imaga9u8te7hghvz.jpeg?q=50" alt="Title" />
            <div class="card-body">
                <h4 class="card-title">
                    <!-- <a href="">Product Title</a> -->
                    <router-link :to="{name:'product', params:{id:23}}">Product Title</router-link>
                </h4>
                <strong>$23</strong>
                <p class="card-text">Lorem ipsum dolor sit amet.</p>
            </div>
            <div class="px-4 pb-1">
                <button class="btn btn-dark">Add to Cart</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>