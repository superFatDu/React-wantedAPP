import React, { Component } from "react";
import { TabBar } from "antd-mobile";
import { withRouter } from "react-router-dom";

class NavLink extends Component {
  render() {
    const navList = this.props.data.filter(item => !item.hide);
    const { pathname } = this.props.location;
    return (
      <TabBar
        tabBarPosition="bottom"
        tintColor="#778cf9"
        unselectedTintColor="#949494"
      >
        {
          navList.map(v => (
            <TabBar.Item
              key={v.path}
              title={v.title}
              icon={{uri: require(`../../statics/img/${v.icon}.png`)}}
              selectedIcon={{uri: require(`../../statics/img/${v.icon}-active.png`)}}
              selected={pathname === v.path}
              onPress={() => {
                this.props.history.push(v.path)
              }}
            >
            </TabBar.Item>
          ))
        }
      </TabBar>
    );
  }
}

export default withRouter(NavLink);