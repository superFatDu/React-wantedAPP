import $http from "../axiosConfig";

const getAuth = (params) => $http("get", "/users/getUserInfo", "0", params, false).then();

export {
  getAuth
}