import { PureComponent } from "react";
import { getAuth } from "../../api/user/AuthRoute";
import { withRouter } from "react-router-dom";

class AuthRoute extends PureComponent {
  render() {
    return null
  }
  componentDidMount() {
    // 定义一个白名单
    const whiteList = ["/login", "/register"];
    const pathname = this.props.location.pathname;
    if (whiteList.indexOf(pathname) > -1) {
      return null;
    }
    // 如果不在白名单内，请求用户信息做跳转操作
    getAuth().then(res => {
      if (res.status === 200) {
        res = res.data;
        if (res.code === 0) {
          // 有登录信息
        } else {
          this.props.history.push("/login");
        }
      }
    })
  }
}

export default withRouter(AuthRoute);