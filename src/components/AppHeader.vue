<template>
<div>
    <nav class="navbar navbar-expand navbar-dark bg-dark">
        <div class="container">
            <div class="nav navbar-nav">
                <!-- <a class="nav-item nav-link active" href="#">Home</a> -->
                <router-link to="/" class="nav-tem nav-link active">Home</router-link>
                <a class="nav-item nav-link" href="#">Product</a>
            </div>

            <div>
                <div class="dropdown open">
                    <button class="btn btn-secondary dropdown-toggle" type="button" id="triggerId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        0 Cart
                    </button>
                    <div @click="$event.stopPropagation()">
                        <MiniCart/>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</div>
</template>

<script>
import MiniCart from './MiniCart.vue'
export default {
    name:"AppHeader",
    components:{
        MiniCart
    }
};
</script>

<style>
</style>
