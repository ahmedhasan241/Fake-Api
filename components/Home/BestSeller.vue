<template>
  <div class="my-5 text-center">
    <h1 class="my-5">Best Seller</h1>

    <div class="btn-group" role="group" aria-label="Basic example">
      <button
        @click="store.getProducts({ limit: 12 })"
        type="button"
        class="btn light"
      >
        All
      </button>
      <button
        @click="store.getProductsCategory('electronics')"
        type="button"
        class="btn light"
      >
        Electronics
      </button>
      <button
        @click="store.getProductsCategory('jewelery')"
        type="button"
        class="btn light"
      >
        Jewelery
      </button>
      <button
        @click="store.getProductsCategory('men\'s clothing')"
        type="button"
        class="btn light"
      >
        Men's Clothing
      </button>
      <button
        @click="store.getProductsCategory('women\'s clothing')"
        type="button"
        class="btn light"
      >
        Women's Clothing
      </button>
    </div>
    <div class="card-group container mt-5">
      <div class="row justify-content-around px-5">
        <div
          class="card rounded my-2 pt-3 mx-auto justify-content-center"
          v-for="product in store.products"
          :key="product.id"
          style="width: 270px; height: 249px"
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
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useProductStore } from "~/stores/product";

const store = useProductStore();

onMounted(() => {
  store.getProducts({ limit: 12 });
});
</script>

<style scoped>
.card-image {
  width: 75px;
  height: 100px;
}
</style>
