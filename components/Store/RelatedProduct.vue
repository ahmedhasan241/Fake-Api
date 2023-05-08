<template>
  <div class="container my-5">
    <h1 class="my-5 text-center">Related Products</h1>
    <div class="card-group container mt-5">
      <div class="row justify-content-around px-5">
        <NuxtLink
          class="card rounded text-decoration-none my-2 pt-3 mx-auto justify-content-center"
          v-for="product in products.slice(0,3)"
          :key="product.id"
          style="width: 270px; height: 249px"
          :to="`/store/${product.id}`"
        >
          <img
            :src="`${product.image}`"
            class="card-image mx-auto card-img-top"
            alt="..."
          />
          <div class="card-body">
            <p class="card-title mx-auto">{{ product.title }}</p>
            <p class="card-text text-danger">$ {{ product.price }}</p>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  products: Array,
});
</script>

<style lang="scss" scoped></style>
