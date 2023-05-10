<template>
  <div>
      {{cart.cartProducts}}
    </div>
</template>

<script setup>
import {useCartStore} from '~/stores/cart'
const cart = useCartStore()
  onMounted(()=>{
    cart.getCart()
  })

</script>

<style lang="scss" scoped></style>
