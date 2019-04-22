import * as actionTypes from "./actionTypes";
import { postRegInfo, userLogin } from "../../../api/user"

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
        regMsg: [],
        resRegMsg: "账号密码不能为空"
      })
    } else {
      let params = {
        user: account,
        pwd: password,
        type: type
      };
      postRegInfo(params).then(res => {
        let regMsg = [];
        if (res.status === 200) {
          if (res.data.code === 0) {
            regMsg = res.data.regMsg
          }
          dispatch ({
            type: actionTypes.HANDLE_USER_SUBMIT,
            regMsg,
            resRegMsg: res.data.msg
          })
        }
      })
    }
  }
};

export const handleUserLogin = (user, pwd) => {
  return (dispatch) => {
    if (!user || !pwd) {
      dispatch({
        type: actionTypes.HANDLE_USER_LOGIN,
        loginMsg: [],
        resLoginMsg: "账号密码都不能为空"
      })
    } else {
      let params = { user, pwd };
      userLogin(params).then(res => {
        if (res.status === 200) {
          let loginMsg = [];
          res = res.data;
          if (res.code === 0) {
            loginMsg = res.loginMsg
          }
          dispatch({
            type: actionTypes.HANDLE_USER_LOGIN,
            loginMsg,
            resLoginMsg: res.msg
          })
        }
      })
    }
  }
}