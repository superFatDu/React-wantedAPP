import * as actionTypes from "./actionTypes";
import { fromJS } from "immutable";

const defaultState = fromJS({
  account: "",
  password: "",
  type: "genius",
  resRegMsg: "",
  regMsg: [],
  loginMsg: [],
  resLoginMsg: "",
  redirectTo: "",
  isReg: false
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
      if (action.regMsg.length === 0) {
        return state.set("resRegMsg", action.resRegMsg).set("regMsg", action.regMsg);
      }
      return state.set("resRegMsg", action.resRegMsg).set("regMsg", action.regMsg).set("isReg", true);
    case actionTypes.HANDLE_USER_LOGIN:
      if (action.loginMsg.length === 0) {
        return state.set("resLoginMsg", action.resLoginMsg).set("loginMsg", action.loginMsg);
      }
      return state.set("resLoginMsg", action.resLoginMsg).set("loginMsg", action.loginMsg).set("redirectTo", "/" + action.loginMsg.type + "info");
    default:
      break;
  }
  return state;
}