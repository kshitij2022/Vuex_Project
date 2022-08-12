<template>
  <div id="app">
    <AppHeader></AppHeader>
    <div class="container">
      
    </div>
   <router-view></router-view>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue"
export default {
  name: 'App',
  components: {
    AppHeader
  }
}
</script>

<style>

</style>
