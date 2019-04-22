import React, { PureComponent} from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { actionCreators } from "./store";
import {
  UserWrapper,
  UserForm,
  InputWrapper,
  Input,
  UserSubmitBtn,
  ToRegister,
  ResponseMsg
} from "./style";
import Logo from "../../components/logo/logo";
import { Redirect } from "react-router-dom";

class Login extends PureComponent {
  render() {
    return (
      <UserWrapper>
        {
          this.props.redirectTo
            ? <Redirect to={this.props.redirectTo}/>
            : null
        }
        <Logo/>
        <UserForm>
          <InputWrapper>
            <i className="iconfont login-icon">&#xe608;</i>
            <Input placeholder="账号" type="text"  ref={(account)=> this.account = account}/>
          </InputWrapper>
          <InputWrapper>
            <i className="iconfont login-icon">&#xe614;</i>
            <Input placeholder="密码" type="password" ref={(password)=> this.password = password}/>
          </InputWrapper>
          <UserSubmitBtn onTouchEnd={() => this.props.handleLogin(this.account.value, this.password.value)}>登录</UserSubmitBtn>
          <ResponseMsg className={this.props.loginMsg.length === 0 ? "error" : ""}>{this.props.resLoginMsg}</ResponseMsg>
        </UserForm>
        <ToRegister>
          还没有账号？<Link to="/register">赶快注册一个吧！</Link>
        </ToRegister>
      </UserWrapper>
    )
  }
}

const mapStateToProps = (state) => ({
  loginMsg: state.getIn(["user", "loginMsg"]),
  resLoginMsg: state.getIn(["user", "resLoginMsg"]),
  redirectTo: state.getIn(["user", "redirectTo"])
});

const mapDispatchToProps = (dispatch) => {
  return {
    handleLogin(account, password) {
      dispatch(actionCreators.handleUserLogin(account, password));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);