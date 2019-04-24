import * as actionTypes from "./actionTypes";
import { fromJS } from "immutable";

const defaultState = fromJS({
  bossList: []
});

export default (state = defaultState, action) => {
  if (action.type === actionTypes.HANDLE_BOSS_LIST) {
    return state.set("bossList", action.value.data);
  }
  return state;
}