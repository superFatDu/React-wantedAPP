import * as actionTypes from "./actionTypes";
import { fromJS } from "immutable";

const defaultState = fromJS({
  redirectTo: ""
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.HANDLE_ME_LOGOUT:
      return state.set("redirectTo", "/login");
    default:
      return state;
  }
}