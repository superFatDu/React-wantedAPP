import * as actionTypes from "./actionTypes";
import { postOtherInfo, getISUpdated } from "../../../api/info";

export const handleInfoSubmit = (data) => {
  return (dispatch) => {
    postOtherInfo(data).then(res => {
      if (res.status === 200) {
        res = res.data;
        let redirectTo = "";
        if (res.code === 0) {
          redirectTo = "/login";
        } else {
          redirectTo = `/${res.msg.type}`;
        }
        dispatch({
          type: actionTypes.HANDLE_BOSS_INFO,
          value: Object.assign({}, res.msg, {redirectTo})
        })
      }
    });
  }
};

export const handleIsUpdated = () => {
  return (dispatch) => {
    getISUpdated().then(res => {
      if (res.status === 200) {
        res = res.data;
        dispatch({
          type: actionTypes.HANDLE_IS_UPDATED,
          value: res
        })
      }
    })
  }
}