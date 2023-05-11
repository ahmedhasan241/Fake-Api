<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-body-light">
      <div class="container d-flex align-items-center">
        <select class="selectpicker" data-width="fit">
          <option value="English">En</option>
          <option value="Arabic">Ar</option>
        </select>
        <select class="selectpicker" data-width="fit">
          <option value="USD">USD</option>
          <option value="EGP">EGP</option>
        </select>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <span class="navbar-text ms-auto mb-2 mb-lg-0 d-lg-flex">
            <NuxtLink
              to="/"
              class="links d-flex mx-2 text-secondary text-decoration-none"
            >
              <Icon
                name="material-symbols:person-3-rounded"
                class="fs-5 mx-2"
              />
              <p>My Profile</p>
            </NuxtLink>
            <NuxtLink
              to="/cart"
              class="links d-flex mx-2 text-secondary text-decoration-none"
            >
              <Icon
                name="material-symbols:shopping-cart-sharp"
                class="fs-5 mx-2"
              />
              <p>{{ cart.countCartItems }} Items</p>
              <p class="text-body-tertiary mx-2">$ 0.00</p>
            </NuxtLink>
            <Icon
              name="material-symbols:search-rounded"
              class="search-icon fs-5 mx-2"
            />
          </span>
        </div>
      </div>
    </nav>
    <h1 class="main-title col-12 text-center">Bouncer</h1>
    <ul class="nav justify-content-center">
      <li class="nav-item">
        <NuxtLink class="nav-link text-secondary" aria-current="page" to="/"
          >Home</NuxtLink
        >
      </li>
      <li class="nav-item">
        <NuxtLink class="nav-link text-secondary" to="/store">Store</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useCartStore } from "~/stores/cart";

const cart = useCartStore();
</script>

<style scoped>
.selectpicker {
  border: none;
  margin-right: 10px;
}
.main-title {
  color: #ff4252;
}
.search-icon {
  cursor: pointer;
}
</style>
