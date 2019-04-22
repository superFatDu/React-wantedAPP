import $http from "../axiosConfig";

const postRegInfo = (params) => $http("post", "/user/regInfo", "1", params, false).then();
  const userLogin = (params) => $http("post", "/user/login", "1", params, false).then();

export {
  postRegInfo,
  userLogin
}