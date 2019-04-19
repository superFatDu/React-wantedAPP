import styled from "styled-components";

export const UserWrapper = styled.div`
  width: 100%;
  min-height: 100%;
  position: relative;
`;

export const UserForm = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 0 0.5rem;
  margin-top: .5rem;
`;

export const InputWrapper = styled.div`
  width: 100%;
  height: 0.4rem;
  border-bottom: 1px solid #f1f1f1;
  display: flex;
  align-items: center;
  margin-bottom: 0.3rem;
  .login-icon {
    font-size: 0.24rem;
    color: #c4c4c4;
    margin-right: 0.1rem;
  }
`;

export const Input = styled.input`
  width: 100%;
  font-size: 0.15rem;
  box-sizing: border-box;
  height: 0.4rem;
  line-height: 0.4rem;
  border: none;
  outline: none;
  &::placeholder {
    color: #d8d8d8;
    font-size: 0.15rem;
  }
`;

export const UserSubmitBtn = styled.div`
  width: 100%;
  height: 0.45rem;
  line-height: 0.45rem;
  font-size: 0.17rem;
  color: #fff;
  text-align: center;
  border-radius: 0.2rem;
  background: linear-gradient(to right, #778cf9, #969ef8);
`;

export const ToRegister = styled.div`
  width: 100%;
  line-height: .6rem;
  position: absolute;
  left: 0;
  bottom: 0;
  font-size: .14rem;
  text-align: center;
  color: #666;
  a {
    color: #778cf9;
  }
`;

