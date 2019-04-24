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
    text-align: center;
    font-size: 18px;
    position: fixed;
    top: 0;
    left: 0;
  }
  .chat-main {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 60px 15px 75px 15px;
    overflow: auto;
  }
  .chat-footer {
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 999;
    .chat-footer-input { 
      height: 60px;
      .am-input-extra {
        padding: 10px 22px;
        border: 1px solid #778cf9;
        color: #778cf9;
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