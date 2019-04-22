import React, { PureComponent} from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { actionCreators } from "./store"
import {
  UserWrapper,
  UserForm,
  InputWrapper,
  Input,
  UserSubmitBtn,
  ToRegister,
  CheckBox,
  ResponseMsg
} from "./style";
import Logo from "../../components/logo/logo";

class Register extends PureComponent {
  render() {
    return (
      <UserWrapper>
        <Logo/>
        <UserForm>
          <InputWrapper>
            <i className="iconfont login-icon">&#xe608;</i>
            <Input placeholder="账号" type="text" onChange={(e) => this.props.handleInfoAccount(e.target.value)}/>
          </InputWrapper>
          <InputWrapper>
            <i className="iconfont login-icon">&#xe614;</i>
            <Input placeholder="密码" type="text" onChange={(e) => this.props.handleInfoPassword(e.target.value)}/>
          </InputWrapper>
          <InputWrapper onTouchEnd={() => this.props.handleRole("genius")}>
            <CheckBox className={this.props.type === "genius" ? "checked" : "unchecked"} />
            <span className={this.props.type === "genius" ? "checked" : "unchecked"}>牛人</span>
          </InputWrapper>
          <InputWrapper onTouchEnd={() => this.props.handleRole("boss")}>
            <CheckBox className={this.props.type === "genius" ? "unchecked" : "checked"} />
            <span className={this.props.type === "genius" ? "unchecked" : "checked"}>伯乐</span>
          </InputWrapper>
          <UserSubmitBtn onTouchEnd={() => this.props.handleSubmit(this.props.account, this.props.password, this.props.type)}>提交注册</UserSubmitBtn>
          <ResponseMsg className={Object.keys(this.props.loginMsg).length === 0 ? "error" : ""}>{this.props.responseMsg}</ResponseMsg>
        </UserForm>
        <ToRegister>
          已有账号，<Link to="/login">跳转登录！</Link>
        </ToRegister>
      </UserWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    account: state.getIn(["user", "account"]),
    password: state.getIn(["user", "password"]),
    type: state.getIn(["user", "type"]),
    loginMsg: state.getIn(["user", "loginMsg"]),
    responseMsg: state.getIn(["user", "responseMsg"])
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleRole(role) {
      dispatch(actionCreators.handleUserRole(role));
    },
    handleInfoAccount(value) {
      dispatch(actionCreators.handleUserAccount(value));
    },
    handleInfoPassword(value) {
      dispatch(actionCreators.handleUserPassword(value));
    },
    handleSubmit(account, password, type) {
      dispatch(actionCreators.handleUserSubmit(account, password, type))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);