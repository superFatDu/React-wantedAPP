import styled from "styled-components";

export const ChatWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  .chat-header {
    width: 100%;
    line-height: 45px;
    background: #778cf9;
    color: #fff;
    text-align: left;
    font-size: 18px;
    position: fixed;
    top: 0;
    left: 0;
    box-sizing: border-box;
    padding-left: 15px;
    z-index: 999;
  }
  .chat-main {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 60px 15px 65px 15px;
    overflow: auto;
    p {
      width: 100%;
      box-sizing: border-box;
      margin-bottom: 15px;
      &.chat-from {
        float: right;
        text-align: right;
        span {
          display: inline-block;
          background: #778cf9;
          padding: 10px;
          color: #fff;
          border-radius: 4px;
          text-align: left;
          max-width: 70%;
          margin-right: 9px;
          position: relative;
          vertical-align: top;
          &:after {
            content: "";
            width: 0;
            height: 0;
            border-left: 7px solid #778cf9;
            border-top: 7px solid transparent;
            border-bottom: 7px solid transparent;
            position: absolute;
            top: 7px;
            right: -5px;
          }
        }
      }
      &.chat-to {
        float: left;
        span {
          display: inline-block;
          background: #f7f7f7;
          padding: 10px;
          border-radius: 4px;
          max-width: 70%;
          margin-left: 9px;
          position: relative;
          vertical-align: top;
          &:after {
            content: "";
            width: 0;
            height: 0;
            border-right: 7px solid #f7f7f7;
            border-top: 7px solid transparent;
            border-bottom: 7px solid transparent;
            position: absolute;
            top: 7px;
            left: -5px;
          }
        }
      }
    }
  }
  .chat-footer {
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 999;
    .chat-footer-input { 
      height: 50px;
      .am-input-extra {
        padding: 8px 15px;
        background: #778cf9;
        color: #fff;
        border-radius: 2px;
        font-size: 18px;
      }
      .am-input-control {
        input {
          color: #555;
          font-size: 15px;
        }
      }
    }
  }
`;