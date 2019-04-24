import * as actionTypes from "./actionTypes";
import { initMsgList } from "../../../api/chat";
import io from "socket.io-client";

// 连接socket
const socket = io("ws://localhost:8081");

export const handleMsgList = (chat_id) => {
  return (dispatch) => {
    initMsgList({chat_id}).then(res => {
      if (res.status === 200) {
        res = res.data;
        dispatch({
          type: actionTypes.MSG_LIST,
          value: res.msg
        })
      }
    });
  }
};

export const sendMsg = (from, to, msg) => {
  return dispatch => {
    socket.emit("sendMsg", {from, to, msg});
  }
}

export const handleChatReceive = () => ({
  type: actionTypes.MSG_RECV
});

export const handleChatRead = () => ({
  type: actionTypes.MSG_READ
});