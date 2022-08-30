<template>
   <div class="col-xl-3 col-lg-3 col-md-4 col-sm-4 mt-3 p-3" style="margin:0 auto" >
        <div class="text-center border">
            <img class="img-fluid" style="height:200px" :src='product.image' alt="Images" />
            <div class="card-body">
                <h4 class="card-title">
                    <!-- <a href="">Product Title</a> -->
                    <router-link :to="{name:'product', params:{id:product.id}}">{{product.title.slice(0,20)}}..</router-link>
                </h4>
                <strong>$ {{product.price}}</strong>
                <p class="card-text">{{product.description.slice(0,120)}}</p>
            </div>
            <div class="px-4 pb-1">
                <button class="btn btn-dark">Add to Cart</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:['product']
}
</script>

<style>

</style>