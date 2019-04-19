// import * as actionTypes from "./actionTypes";
import { fromJS } from "immutable";

const defaultState = fromJS({

});

export default (state = defaultState, action) => {
  /*switch (action.type) {
    case actionTypes.SUBMIT_USER_INFO:
      return state;
    default:
      break;
  }*/
  return state;
}