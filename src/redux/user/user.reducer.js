import { UserActionTypes } from "./user.types";

const INITIAL_STATE = {
  currentUser: null
};

//simple reducer with a default value for the state
const userReducer = (state = INITIAL_STATE, action) => {
  const { SET_CURRENT_USER } = UserActionTypes;

  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;
