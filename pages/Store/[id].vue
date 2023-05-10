<template>
  <div class="container mt-5">
    <nav
      aria-label="breadcrumb"
      class="bg-secondary-emphasis d-none d-sm-block"
    >
      <ol class="breadcrumb justify-content-center">
        <li class="breadcrumb-item">
          <NuxtLink class="text-decoration-none" to="/">Home</NuxtLink>
        </li>
        <li class="breadcrumb-item">
          {{ store.product.category }}
        </li>
        <li class="breadcrumb-item text-dark active" aria-current="page">
          {{ store.product.title }}
        </li>
      </ol>
    </nav>
    <div class="row mt-5">
      <div class="col-lg-10 col-12">
        <div class="card border-0 mb-3 d-flex flex-sm-row flex-xs-column">
          <div class="card-image">
            <img
              :src="`${store.product.image}`"
              class="rounded-start mx-auto"
              alt="..."
              style="width: 270px; height: 270px"
            />
          </div>

          <div class="card-body mx-md-5 mx-sm-0">
            <h3 class="card-text">{{ store.product.title }}</h3>
            <p class="card-text fs-4 mt-5 text-danger">
              $ {{ store.product.price }}
            </p>
            <h6 class="card-text mb-3">
              Availability:
              <span class="text-secondary ms-3">In Stock</span>
            </h6>
            <h6 class="card-text mb-3">
              Category:
              <span class="text-secondary ms-3">{{
                store.product.category
              }}</span>
            </h6>
            <h6 class="card-text">Free Shipping</h6>

            <span class="me-5 mt-3 d-flex align-items-end">
              <h6>Sizes</h6>
              <select
                class="selectpicker rounded border-secondary-subtle ms-5 px-3 py-1"
                data-width="fit"
              >
                <option value="Small">Small</option>
                <option value="Medium">Medium</option>
                <option value="Large">Large</option>
                <option value="X-Large">X-Large</option>
                <option value="2X-Large">2X-Large</option>
              </select>
            </span>
            <button
              type="button"
              class="btn btn-outline-primary mt-3 p-2 px-lg-5 align-items-center"
            >
              <Icon
                name="material-symbols:shopping-cart-sharp"
                class="fs-4 mx-2"
              />
              Add To Cart
            </button>
          </div>
        </div>
        <div class="my-5 col-sm-12 bg-light-subtle p-0 p-md-5">
          <span class="fs-3 my-5 fw-medium text-primary"
            >Product Infomation</span
          >
          <p class="mt-5 fs-5">{{ store.product.description }}</p>
        </div>
      </div>
      <div class="col-2 d-flex d-lg-column d-none"></div>
      <StoreRelatedProduct :products="store.products" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useProductStore } from "~/stores/product";

const store = useProductStore();
const route = useRoute();
const id = route.params.id;
console.log(id);
const categoryProducts = store.categoryProducts;
onMounted(async () => {
  await store.getProduct(id);
  store.getProductsCategory(store.product.category);
});
</script>

<style lang="scss" scoped></style>
