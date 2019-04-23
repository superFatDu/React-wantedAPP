import { fromJS } from "immutable";

const authDefault = fromJS({
  account: "",
  type: "",
  _id: "",
  isLogin: false,
  isUpdate: false
});

const HANDLE_AUTH = "/AUTH/HANDLE_AUTH";

export const handleAuth = (value) => ({
  type: HANDLE_AUTH,
  value
});

export default (state = authDefault, action) => {
  if (action.type === HANDLE_AUTH) {
    return state.set("account", action.value.user).set("type", action.value.type).set("_id", action.value._id).set("isLogin", true);
  }
  return state;
}