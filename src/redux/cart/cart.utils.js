export const addItemToCart = (cartItems, newItem) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === newItem.id
  );

  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === newItem.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...newItem, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, itemToRemove) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === itemToRemove.id
  );

  // eslint-disable-next-line
  if (existingCartItem.quantity == 1) {
    //removes when the condition evaluates to false
    // eslint-disable-next-line
    return cartItems.filter(cartItem => cartItem.id != itemToRemove.id);
  }

  return cartItems.map(cartItem =>
    // eslint-disable-next-line
    cartItem.id == itemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
