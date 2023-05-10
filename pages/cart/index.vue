<template>
  <div>
    <ul class="dropdown-menu">
      <li>
        <a class="dropdown-item" @click="store.getProducts({ limit: 10 })"
          >All Products</a
        >
      </li>
      <li
        v-for="cate in store.categories"
        :key="cate.id"
        value="cate"
        class="text-capitalize"
      >
        <a class="dropdown-item" @click="store.getProductsCategory(cate)"
          >{{ cate }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup>
function getRandomItem(arr) {
  // get random index value
  const randomIndex = Math.floor(Math.random() * arr.length);

  // get random item
  const item = arr[randomIndex];

  return item;
}

const array = [1, "hello", 5, 8];

const result = getRandomItem(array);
console.log(result);
</script>

<style lang="scss" scoped></style>
