import * as actionTypes from "./actionTypes";
import { fromJS } from "immutable";

const infoDefault = fromJS({
  user: "",
  type: "",
  redirectTo: ""
});

export default (state = infoDefault, action) => {
  if (action.type === actionTypes.HANDLE_BOSS_INFO) {
    return state.set("user", action.value.user).set("type", action.value.type).set("redirectTo", action.value.redirectTo);
  }
  if (action.type === actionTypes.HANDLE_IS_UPDATED) {
    if (typeof action.value.data.isUpdate !== "undefined") {
      return state.set("redirectTo", `/${action.value.data.type}`);
    }
  }
  return state;
}