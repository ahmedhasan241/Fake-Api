<script setup>
import { useCounterStore } from "@/stores/counter";

// access the `store` variable anywhere in the component ✨
const store = useCounterStore();
</script>

<template>
  <!-- Access the state directly from the store -->
  <div>Current Count: {{ store.count }}</div>
  <button @click="store.increment">++</button>
</template>
