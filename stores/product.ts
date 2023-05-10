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
  const randomProduct = ref([
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
  const categoryProducts = ref([
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
  const product = ref([]);
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
  async function getRandomProduct(params) {
    let Api = "https://fakestoreapi.com/products";
  
    if(products.value.length == 0){
      let response = await fetch(Api);
      products.value = await response.json();
    }
      let randomProduct = [] 
      products.value = randomProducts

  }
  async function getProduct(params) {
    let Api = `https://fakestoreapi.com/products/${params}`;

    let response = await fetch(Api);
    product.value = await response.json();
  }

  async function getProductsCategory(params) {
    let Api = `https://fakestoreapi.com/products/category/${params}`;

    let response = await fetch(Api);
    products.value = await response.json();
  }
  function getProductsRange(start, end) {
   return products.value.filter(
      (prod) => prod.price <= Number(end) && prod.price >= Number(start)
    );
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
    getProduct,
    categoryProducts,
    product,
    randomProduct,
    getRandomProduct,
  };
});
