<template>
  <div>
    <div v-for="item in cart.cartItems" :key="item.id">
      {{ item }}
      <button @click="cart.removeFromCart(item)">remove</button>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from "~/stores/cart";

const cart = useCartStore();
useHead({
  titleTemplate: "Bouncer - Cart",
});
</script>

<style lang="scss" scoped></style>
