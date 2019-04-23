import * as actionTypes from "./actionTypes";
import { getBossList } from "../../../api/boss"

export const handleBossList= () => {
  return (dispatch) => {
    let params = {
      type: "bossa"
    };
    getBossList(params).then(res => {
      res = res.data;
      dispatch({
        type: actionTypes.HANDLE_BOSS_LIST,
        value: res
      })
    })
  }
};
