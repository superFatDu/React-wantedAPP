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

class DashBoard extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      navList: [{
        path: "/genius",
        text: "牛人",
        icon: "job",
        title: "牛人列表",
        component: Genius,
        hide: this.props.type === "boss"
      }, {
        path: "/boss",
        text: "伯乐",
        icon: "boss",
        title: "伯乐列表",
        component: Boss,
        hide: this.props.type === "genius"
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
      }]
    }
  }
  render() {
    const navList = [{
      path: "/genius",
      text: "牛人",
      icon: "job",
      title: "牛人列表",
      component: Genius,
      hide: this.props.type === "boss"
    }, {
      path: "/boss",
      text: "伯乐",
      icon: "boss",
      title: "伯乐列表",
      component: Boss,
      hide: this.props.type === "genius"
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
        <NavLink data={navList}/>
      </DashBoardWrapper>
    )
  }
}

const mapState = (state) => ({
  type: state.getIn(["auth", "type"])
});

export default connect(mapState, null)(DashBoard);