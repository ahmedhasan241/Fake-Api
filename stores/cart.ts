export const useCartStore = defineStore("cart", () => {
  let cartItems: any = ref([]);

  const countCartItems = computed(() => {
    return cartItems.value.length;
  });
  const getCartItems = computed(() => {
    return cartItems.value;
  });

  function addToCart(prod) {
    let index = cartItems.value.findIndex((product) => product.id === prod.id);
    if (index !== -1) {
      prod += 1;
      console.log(cartItems);
    } else {
      prod.quantity = 1;
      cartItems.value.push(prod);
      console.log(cartItems);
    }
  }

  function incrementQ(prod) {
    let index = cartItems.value.findIndex((product) => product.id === prod.id);
    if (index !== -1) {
      cartItems.value[index].quantity += 1;
    }
    ``;
  }

  function decrementQ(prod) {
    let index = cartItems.value.findIndex((product) => product.id === prod.id);
    if (index !== -1) {
      cartItems.value[index].quantity -= 1;
      if (cartItems.value[index].quantity === 0) {
        cartItems.value = cartItems.value.filter(
          (product) => product.id !== prod.id
        );
      }
    }
  }

  function removeFromCart(prod) {
    cartItems.value = cartItems.value.filter(
      (product) => product.id !== prod.id
    );
  }

  return {
    cartItems,
    countCartItems,
    getCartItems,
    addToCart,
    incrementQ,
    decrementQ,
    removeFromCart,
  };
});
