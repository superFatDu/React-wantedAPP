import React, { Component } from "react";
import { connect } from "react-redux";
import { Result, List, Modal } from "antd-mobile";
import * as browserCookies from "browser-cookies";
//import AuthRoute from "../../components/authRoute/authRoute";
import { actionCreators } from "./store";
import { Redirect } from "react-router-dom";

class User extends Component {
  render() {
    const outStyle = {
      margin: "30px 15px 0 15px",
      lineHeight: "0.45rem",
      textAlign: "center",
      background: "linear-gradient(to right,#778cf9,#969ef8)",
      fontSize: "0.17rem",
      color: "#ffffff",
      borderRadius: "0.2rem"
    };
    return (
      <div>
        {
          this.props.redirectTo
            ? <Redirect to={this.props.redirectTo} />
            : null
        }
        <Result
          img={<img src={this.props.userInfo.selectIcon} style={{width: 50}} alt=""/>}
          title={this.props.userInfo.title}
          message={this.props.userInfo.type === "boss" ? this.props.userInfo.company : null}
        />
        <List renderHeader={() => "简介"}>
          <List.Item>
            {this.props.userInfo.title}
            {
              this.props.userInfo.desc.split("\n").map(v => (
                <List.Item.Brief key={v}>
                  {v}
                </List.Item.Brief>
              ))
            }
          </List.Item>
        </List>
        <div style={outStyle} onClick={this.props.handleLogOut}>退出登录</div>
      </div>
    )
  }
}

const mapState = (state) => ({
  userInfo: state.getIn(["info", "data"]),
  redirectTo: state.getIn(["me", "redirectTo"])
});

const mapDispatch = (dispatch) => {
  return {
    handleLogOut() {
      const alert = Modal.alert;
      alert("退出", "确认退出登录吗？", [
        { text: "取消", onPress: () => console.log("取消") },
        { text: "确定", onPress: () => {
            browserCookies.erase("userId");
            //window.location.reload();
            dispatch(actionCreators.handleMeOut());
            // this.props.history.push("/login");
          }
        }
      ])
    }
  }
};

export default connect(mapState, mapDispatch)(User);