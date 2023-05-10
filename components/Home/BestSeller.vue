<template>
  <div class="my-5 text-center">
    <h1 class="my-5">Best Seller</h1>
    <div
      class="btn-group d-md-block d-none"
      role="group"
      aria-label="Basic example"
    >
      <button
        @click="store.getProducts({ limit: 10 })"
        type="button"
        class="btn light"
      >
        All
      </button>
      <button
        v-for="cate in store.categories"
        @click="store.getProductsCategory(cate)"
        :key="cate.id"
        type="button"
        class="btn light text-capitalize"
      >
        {{ cate }}
      </button>
    </div>
    <div class="dropdown-center d-md-none d-block">
      <button
        class="btn btn-light btn-lg dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Filter Products
      </button>
    </div>
    <div class="container mt-5">
      <div
        class="row justify-content-center justify-content-sm-around mb-5 text-center"
      >
        <NuxtLink
          v-for="product in store.products"
          :key="product.id"
          style="width: 250px; height: 249px"
          :to="`/store/${product.id}`"
          class="card shadow text-decoration-none col-xs-10 col-sm-5 col-lg-4 col-xl-4 text-center my-5"
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
  </div>
</template>

<script setup>
import { useProductStore } from "~/stores/product";

const store = useProductStore();

onMounted(() => {
  store.getProducts({ limit: 10 });
});
</script>

<style scoped>
.card-image {
  width: 75px;
  height: 100px;
}
</style>
