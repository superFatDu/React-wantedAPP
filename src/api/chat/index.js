import $http from "../axiosConfig";

const initMsgList = (params) => $http("get", "/chat/init", "0", params, false).then();

export { initMsgList }