import { combineReducers } from "redux";

//reducers
import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";

//combine all reducers to generate root reducer
export default combineReducers({
  user: userReducer,
  cart: cartReducer
});
