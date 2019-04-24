import * as actionTypes from "./actionTypes";
import { fromJS } from "immutable";

const infoDefault = fromJS({
  user: "",
  type: "",
  data: [],
  redirectTo: ""
});

export default (state = infoDefault, action) => {
  if (action.type === actionTypes.HANDLE_BOSS_INFO) {
    return state.set("user", action.value.user).set("type", action.value.type).set("redirectTo", action.value.redirectTo).set("data", action.value)
  }
  // if (action.type === actionTypes.HANDLE_IS_UPDATED) {
  //   return state.set("redirectTo", `/${action.value.data.type}`);
  // }
  return state;
}