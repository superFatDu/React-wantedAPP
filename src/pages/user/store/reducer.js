import * as actionTypes from "./actionTypes";
import { fromJS } from "immutable";

const defaultState = fromJS({
  account: "",
  password: "",
  type: "genius",
  responseMsg: "",
  loginMsg: []
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.HANDLE_USER_ROLE:
      return state.set("type", action.role);
    case actionTypes.HANDLE_USER_ACCOUNT:
      return state.set("account", action.value);
    case actionTypes.HANDLE_USER_PASSWORD:
      return state.set("password", action.value);
    case actionTypes.HANDLE_USER_SUBMIT:
        return state.set("responseMsg", action.responseMsg).set("loginMsg", action.loginMsg)
    default:
      break;
  }
  return state;
}