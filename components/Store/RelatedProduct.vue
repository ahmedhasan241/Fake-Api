<template>
  <div class="container related-prod">
    <h1 class="my-5 text-center">Related Products</h1>
    <div
      class="row justify-content-center justify-content-sm-between mb-5 text-center"
    >
      <NuxtLink
        v-for="product in products.slice(0, 4)"
        :key="product.id"
        style="width: 250px; height: 249px"
        :to="`/store/${product.id}`"
        class="card shadow text-decoration-none col-10 col-sm-5 col-lg-3 col-xl-3 text-center my-5"
      >
        <img
          :src="`${product.image}`"
          class="card-img-top mx-auto mt-3 h-50 w-50"
          alt="..."
        />
        <div class="card-body h-50">
          <h6 class="card-title" style="font-size: 13px">
            {{ product.title }}
          </h6>
          <p class="card-text text-danger">$ {{ product.price }}</p>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  products: Array,
});
</script>

<style scoped>
.related-prod {
  margin: 100px 0;
}
</style>
