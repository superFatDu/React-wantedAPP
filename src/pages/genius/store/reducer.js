import * as actionTypes from "./actionTypes";
import { fromJS } from "immutable";

const defaultState = fromJS({
  geniusList: []
});

export default (state = defaultState, action) => {
  if (action.type === actionTypes.HANDLE_GENIUS_LIST) {
    return state.set("geniusList", action.value.data);
  }
  return state;
}