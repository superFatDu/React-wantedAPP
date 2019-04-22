import $http from "../axiosConfig";

const postRegInfo = (params) => $http("post", "/user/regInfo", "1", params, false).then();

export {
  postRegInfo
}