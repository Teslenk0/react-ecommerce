import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";

//combine all reducers to generate root reducer
export default combineReducers({
  user: userReducer
});
