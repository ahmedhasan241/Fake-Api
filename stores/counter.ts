export const useCounterStore = defineStore("counter", () => {
  const count = ref(10);
  const name = ref("Eduardo");
  const products = ref([]);
  const doubleCount = computed(() => count.value * 2);
  function increment() {
    count.value++;
  }
  async function getProducts(params) {
    let Api = "https://fakestoreapi.com/products";
    for (let param in params) {
      Api += `?${param}=${params[param]}`;
    }
    let response = await fetch(Api);
    products.value = await response.json();
  }

  return { count, name, doubleCount, increment ,getProducts , products};
});
