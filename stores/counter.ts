export const useCounterStore = defineStore("counter", () => {
  const count = ref(10);
  const name = ref("Eduardo");
  const products = ref([]); // 20
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
  function getProductsRange(start, length) {
    //
    /*
  [1] 0 : 5
  [2] 5 : 10
  [3] 10 : 15
  [4] 15 : 20
  [5] 20 : 25
*/
    console.log(products.value.slice(start, length) )
    return products.value.slice(start, length);

  }

  return { doubleCount, increment, getProducts, products, getProductsRange };
});
