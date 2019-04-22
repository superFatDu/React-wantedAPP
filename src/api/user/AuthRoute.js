import $http from "../axiosConfig";

const getAuth = (params) => $http("get", "/user/getUserInfo", "0", params, false).then();

export {
  getAuth
}