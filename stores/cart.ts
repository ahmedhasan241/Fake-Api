export const useCartStore = defineStore("cart", () => {
  const cartProducts = ref([]);

  async function addToCart(prod) {
    console.log(prod);
    let payload = {
      date: new Date(),
      userId: 9,
      productes: [
        {
            productId : prod.id,
          ...prod,
          quantity: 1,
        },
      ],
    };
    console.log(payload);
    try {
      let response = await fetch("https://fakestoreapi.com/carts", {
        method: "POST",
        body: JSON.stringify(payload),
      });
    } catch (err) {
      console.log(err);
    }
  }
  async function getCart() {
    try {
      let response = await fetch("https://fakestoreapi.com/carts");
      if (response.status === 200) {
        cartProducts.value = await response.json();
      }
    } catch (err) {
      console.log(err);
    }
  }
  async function removeFromCart(prodId) {
    try {
      let response = fetch(`https://fakestoreapi.com/carts/${prodId}`, {
        method: "DELETE",
      });
      getCart();
    } catch (err) {
      console.log(err);
    }
  }

  return {
    cartProducts,
    addToCart,
    getCart,
  };
});
