<template>
  <!-- <div>Product {{id}}</div> -->
  <div class="row m-5" v-if="product">
    <div class="col-4 border border-dark">
        <img :src="product.image" class="img-fluid" style="max-height:450px" alt="">
    </div>

    <div class="col-8">
        <h1>{{product.title}}</h1>
        <h3>{{product.price}}</h3>
        <input type="text" class="text-center col-1 m-2 p-1">
        <button class="btn btn-dark">Add To Cart</button>
            <p class="mt-4">{{product.description}}</p>
    </div>
  </div>
</template>

<script>
export default {
    props:['id'],
     computed:{
        product(){
            return this.$store.state.product;
        }
    },
    mounted(){
        this.$store.dispatch('getProduct', this.id);
    }
}
</script>

<style>

</style>