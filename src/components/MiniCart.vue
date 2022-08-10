<template>
  <div class="dropdown-menu p-2" style="width: 320px; right:0; left:auto;" aria-labelledby="triggerId">
    <div>
      <div class="px-2 d-flex justify-content-between">
        <div>
          <strong>Product Title</strong>
          <br /> 1 X $24
        </div>
        <div>
            <a href="#" class="badge bg-secondary">Remove</a>
        </div>
      </div>
    </div>
    <hr>
    <div class="d-flex justify-content-between">
        <span>Total: $23</span>
        <a href="#">Clear Cart</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "MiniCart",
};
</script>

<style>
</style>