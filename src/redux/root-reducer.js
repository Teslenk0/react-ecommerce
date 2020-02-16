import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
//reducers
import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import directoryReducer from "./directory/directory.reducer";
import shopReducer from "./shop/shop.reducer";
//localstorage
import storage from "redux-persist/lib/storage";

//from the root, only persist the cart reducer
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"]
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer
});

//combine all reducers to generate root reducer and persist it in localstorage
export default persistReducer(persistConfig, rootReducer);
