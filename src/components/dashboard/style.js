import styled from "styled-components";

export const DashBoardWrapper = styled.div`
  width: 100%;
  position: relative;
  .nav-top-bar {
    width: 100%;
    background: linear-gradient(to right,#778cf9,#969ef8);
    position: fixed;
    top: 0;
    z-index: 999;
  }
  .am-tab-bar {
    width: 100%;
    height: auto;
    position: fixed;
    bottom: 0;
  }
`;