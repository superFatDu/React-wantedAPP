import * as actionTypes from "./actionTypes";
import { postRegInfo } from "../../../api/user"

export const handleUserRole = (role) => ({
  type: actionTypes.HANDLE_USER_ROLE,
  role
});

export const handleUserAccount = (value) => {
  return ({
    type: actionTypes.HANDLE_USER_ACCOUNT,
    value
  })
};

export const handleUserPassword = (value) => {
  return ({
    type: actionTypes.HANDLE_USER_PASSWORD,
    value
  })
};

export const handleUserSubmit = (account, password, type) => {
  return (dispatch) => {
    if (!account || !password ||!type) {
      dispatch ({
        type: actionTypes.HANDLE_USER_SUBMIT,
        loginMsg: [],
        responseMsg: "账号密码不能为空"
      })
    } else {
      let params = {
        user: account,
        pwd: password,
        type: type
      };
      postRegInfo(params).then(res => {
        let loginMsg = [];
        if (res.status === 200) {
          if (res.data.code === 0) {
            loginMsg = res.data.loginMsg
          }
          dispatch ({
            type: actionTypes.HANDLE_USER_SUBMIT,
            loginMsg,
            responseMsg: res.data.msg
          })
        }
      })
    }
  }
};