import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { NavBar } from "antd-mobile";
import NavLink from "./navLink";
import { Switch, Route } from "react-router-dom";
import { DashBoardWrapper } from "./style";
import AuthRoute from "../authRoute/authRoute";
import Genius from "../../pages/genius/genius";
import Boss from "../../pages/boss/boss";
import Msg from "../../pages/msg/msg";
import User from "../../pages/me/me";
import { actionCreators } from "../chat/store";

class DashBoard extends PureComponent {
  render() {
    const navList = [{
      path: "/boss",
      text: "牛人",
      icon: "job",
      title: "牛人列表",
      component: Genius,
      hide: this.props.type === "genius"
    }, {
      path: "/genius",
      text: "伯乐",
      icon: "boss",
      title: "伯乐列表",
      component: Boss,
      hide: this.props.type === "boss"
    }, {
      path: "/msg",
      text: "消息",
      icon: "msg",
      title: "消息列表",
      component: Msg
    }, {
      path: "/me",
      text: "我",
      icon: "user",
      title: "个人中心",
      component: User
    }].filter(item => !item.hide);
    const { pathname } = this.props.location;
    return (
      <DashBoardWrapper>
        <AuthRoute/>
        <NavBar className="nav-top-bar">{navList.find(v => v.path === pathname).title}</NavBar>
        <div style={{marginTop: 45}}>
          <Switch>
            {
              navList.map(v => (
                <Route key={v.path} path={v.path} component={v.component}/>
              ))
            }
          </Switch>
        </div>
        <NavLink data={navList} msgList={this.props.msgList}/>
      </DashBoardWrapper>
    )
  }
  componentDidMount() {
    this.props.initList();
    this.props.recvMsg();
  }
}

const mapState = (state) => ({
  type: state.getIn(["auth", "type"]),
  msgList: state.getIn(["chat", "chatMsg"])
});

const mapDispatch = (dispatch) => {
  return {
    initList() {
      dispatch(actionCreators.handleMsgList());
    },
    recvMsg() {
      dispatch(actionCreators.recvMsg());
    }
  }
}

export default connect(mapState, mapDispatch)(DashBoard);