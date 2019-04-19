import React, { PureComponent} from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  UserWrapper,
  UserForm,
  InputWrapper,
  Input,
  UserSubmitBtn,
  ToRegister
} from "./style";
import Logo from "../../components/logo/logo";

class Login extends PureComponent {
  render() {
    return (
      <UserWrapper>
        <Logo/>
        <UserForm>
          <InputWrapper>
            <i className="iconfont login-icon">&#xe608;</i>
            <Input placeholder="账号" type="text"  />
          </InputWrapper>
          <InputWrapper>
            <i className="iconfont login-icon">&#xe614;</i>
            <Input placeholder="密码" type="password" />
          </InputWrapper>
          <UserSubmitBtn login>登录</UserSubmitBtn>
        </UserForm>
        <ToRegister>
          还没有账号？<Link to="/register">赶快注册一个吧！</Link>
        </ToRegister>
      </UserWrapper>
    )
  }
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => {
  return {

  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);