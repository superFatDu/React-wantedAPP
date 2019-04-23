import $http from "../axiosConfig";

const postOtherInfo = (params) => $http("post", "/user/addInfo", "1", params, false).then();
const getISUpdated = (params) => $http("post", "/user/infoUpdated", "1", params, false).then();

export { postOtherInfo, getISUpdated }