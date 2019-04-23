import styled from "styled-components";

export const InfoWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const InfoTitle = styled.div`
  width: 100%;
  line-height: 0.45rem;
  text-align: center;
  background: linear-gradient(to right,#778cf9,#969ef8);
  color: #fff;
  font-size: 0.17rem;
`;
export const AvatarSelector = styled.div`
  width: 100%;
  .am-grid .am-flexbox .am-flexbox-item .am-grid-item-content .am-grid-item-inner-content .am-grid-text {
    width: 100%;
    box-sizing: border-box;
    padding: 0 .05rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .selected-icon {
    line-height: 44px;
    padding-left: 15px;
    font-size: 0.15rem;
    img {
      width: 25px;
      height: 25px;
      vertical-align: middle;
    }
  }
`;
export const InfoList = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding-right: 15px;
  .am-input-label,
  .am-textarea-label,
  .am-input-control input,
  .am-textarea-control textarea{
    font-size: 0.15rem !important;
    color: #000 !important;
  }
  .am-input-control input,
  .am-textarea-control textarea {
    color: #333 !important
  }
  .am-list-item {
    padding-left: 0;
    margin-left: 15px;
  }
  .am-list-item.am-input-item {
    padding-left: 0;
  }
`;

export const InfoSubmit = styled.div`
  margin: 15px;
  height: 0.45rem;
  line-height: 0.45rem;
  border-radius: 0.17rem;
  color: #fff;
  text-align: center;
  font-size: 0.2rem;
  background: linear-gradient(to right,#778cf9,#969ef8);
`;