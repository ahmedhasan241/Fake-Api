export const useProductStore = defineStore("product", () => {
  const products = ref([
    {
      id: "",
      title: "",
      price: "",
      description: "",
      category: "",
      image: "",
      rating: {
        rate: "",
        count: "",
      },
    },
  ]); // 20

  const categories = ref([
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ]);

  async function getProducts(params) {
    let Api = "https://fakestoreapi.com/products";
    for (let param in params) {
      Api += `?${param}=${params[param]}`;
    }
    let response = await fetch(Api);
    products.value = await response.json();
  }

  async function getProductsCategory(params) {
    let Api = `https://fakestoreapi.com/products/category/${params}`;

    let response = await fetch(Api);
    products.value = await response.json();
    console.log(products.value);
  }
  function getProductsRange(start, length) {
    console.log(products.value.slice(start, length));
    return products.value.slice(start, length);
  }
  async function getProductsPrice(start, length) {
    let Api = `https://fakestoreapi.com/products`;

    let response = await fetch(Api);
    products.value = await response.json();
    console.log(products.value.slice(start, length));
    return products.price.slice(start, length);
  }

  return {
    getProducts,
    products,
    getProductsRange,
    getProductsCategory,
    getProductsPrice,
    categories,
  };
});
