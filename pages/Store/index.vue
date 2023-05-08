<template>
  <div class="container mt-5">
    <div class="row justify-content-between d-flex flex-md-row flex-column">
      <div class="col-md-3 col-12 mb-5">
        <div class="list-group bg-light-subtle text-first ps-2">
          <h3 class="my-3">Store</h3>
          <a
            class="list-group-item list-group-item-action bg-light-subtle list-group-item-tertiary border-0"
            >All Items</a
          >
          <a
            v-for="cate in store.categories"
            @click="store.getProductsCategory('cate')"
            :key="cate.id"
            class="list-group-item list-group-item-action text-capitalize bg-light-subtle list-group-item-tertiary border-0"
            >{{ cate }}</a
          >
        </div>
      </div>
      <div class="card-group col-9">
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div v-for="product in store.products" :key="product.id" class="col">
            <NuxtLink
              class="card text-decoration-none text-center"
              style="width: 270px; height: 249px"
              :to="`/store/${product.id}`"
            >
              <img
                :src="`${product.image}`"
                class="card-image card-img-top mx-auto mb-2 p-2"
                alt="..."
                style="width: 200px; height: 117px"
              />
              <div class="card-body">
                <p class="card-title fs-6">{{ product.title }}</p>
                <p class="card-text text-danger">$ {{ product.price }}</p>
              </div>
            </NuxtLink>
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
  store.getProducts({ limit: 20 });
});
</script>

<style scoped>
.list-group a {
  cursor: pointer;
}
</style>
