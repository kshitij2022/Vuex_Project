<template>
   <div class="col-3 mt-3 p-3" style="margin:0 auto" >
        <div class="text-center border" >
            <img class="img-fluid" style="height:250px" :src='product.image' alt="Images" />
            <div class="card-body">
                <h4 class="card-title">
                    <!-- <a href="">Product Title</a> -->
                    <router-link :to="{name:'product', params:{id:product.id}}">{{product.title}}</router-link>
                </h4>
                <strong>$ {{product.price}}</strong>
                <p class="card-text">{{product.description}}</p>
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