import * as actionTypes from "./actionTypes";
import { fromJS } from "immutable";

const defaultState = fromJS({
  chatMsg: [],
  unread: 0
});

export default (state = defaultState, action) => {
  if (action.type === actionTypes.MSG_LIST) {
    return {...state, chatMsg: action.value, unread: action.value.filter(v => !v.read).length}
  }
  return state;
}