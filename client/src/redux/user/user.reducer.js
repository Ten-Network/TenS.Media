import UserActionTypes from "./user.types";
import { registerUser, logInUser, logOutUser } from "./user.utils";

const INITIAL_STATE = {
  currentUser: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    case UserActionTypes.REGISTER_USER:
      return {
        ...state,
        curentUser: registerUser(action.payload),
      };
    case UserActionTypes.LOG_IN_USER:
      return {
        ...state,
        curentUser: logInUser(action.payload),
      };
    case UserActionTypes.LOG_OUT_USER:
      return {
        ...state,
        curentUser: logOutUser(),
      };
    default:
      return state;
  }
};

export default userReducer;
