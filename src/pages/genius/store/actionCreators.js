import * as actionTypes from "./actionTypes";
import { getBossList } from "../../../api/boss"

export const handleGeniusList= () => {
  return (dispatch) => {
    let params = {
      type: "genius"
    };
    getBossList(params).then(res => {
      res = res.data;
      dispatch({
        type: actionTypes.HANDLE_GENIUS_LIST,
        value: res
      })
    })
  }
};
