import $http from "../axiosConfig";

const getBossList = (params) => $http("post", "/user/bossList", "1", params, false).then();

export { getBossList }