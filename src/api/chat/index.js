import $http from "../axiosConfig";

const initMsgList = (params) => $http("post", "/chat/init", "1", params, false).then();

export { initMsgList }