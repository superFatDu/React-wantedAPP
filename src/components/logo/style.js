import styled from "styled-components";
import logoImg from "../../statics/img/user.svg";

export const LogoWrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding-top: 0.3rem;
  display: flex;
  justify-content: center;
`;

export const LogoImg = styled.img.attrs({
  src: `${logoImg}`
})`
  width: 1.5rem;
  height: 1.5rem;
`;