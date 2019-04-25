import * as actionTypes from "./actionTypes";
import { fromJS } from "immutable";

const defaultState = fromJS({
  chatMsg: [],
  unread: 0
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.MSG_LIST:
      return {...state, chatMsg: action.value, unread: action.value.filter(v => !v.read).length};
    case actionTypes.MSG_RECV:
      return {...state, chatMsg: [...state.chatMsg, action.value], unread: state.unread + 1}
    default:
      return state;
  }
}