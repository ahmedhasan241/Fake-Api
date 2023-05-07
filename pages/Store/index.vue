<template>
  <div class="container mt-5">
    <div class="row justify-content-between">
      <div class="col-3">
        <div class="list-group bg-light-subtle text-first ps-2">
          <h3 class="my-3">Store</h3>
          <a
            class="list-group-item list-group-item-action bg-light-subtle list-group-item-tertiary border-0"
            >All Items</a
          >
          <a
            v-for="cate in store.categories"
            @click="store.getProductsCategory('${cate}')"
            :key="cate.id"
            class="list-group-item list-group-item-action bg-light-subtle list-group-item-tertiary border-0"
            >{{ cate }}</a
          >
        </div>
      </div>
      <div class="card-group col-9 d-flex">
        <div
          class="card rounded"
          v-for="product in store.products"
          :key="product.id"
        >
          <img
            :src="`${product.image}`"
            class="card-image card-img-top"
            alt="..."
          />
          <div class="card-body">
            <p class="card-title">{{ product.title }}</p>
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
  store.getProducts({ limit: 6 });
});
</script>

<style scoped>
.list-group a {
  cursor: pointer;
}
</style>
