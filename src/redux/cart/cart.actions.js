import CartActionTypes from "./cart.types";

//Toggle our dropdown hidder or not
export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN
});
