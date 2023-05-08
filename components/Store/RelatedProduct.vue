<template>
  <div class="container my-5">
    {{ products }}
    <h1 class="my-5 text-center">Related Products</h1>
    <div class="row row-cols-1 row-cols-md-4 g-4">
      <div v-for="prod in Products" :key="prod.id" class="col">
        <div class="card border-1">
          <img src="..." class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
        </div>
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
