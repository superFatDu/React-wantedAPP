import React, { Component } from 'react';
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { GlobalStyle } from "./style";
import { FontStyle } from "./statics/iconfont/iconfont";
import Login from "./pages/user/login";
import Register from "./pages/user/regist";
import BossInfo from "./pages/userInfo/bossInfo";
import GeniusInfo from "./pages/userInfo/geniusInfo";
import AuthRoute from "./components/authRoute/authRoute";
import DashBoard from "./components/dashboard/dashboard";
import Chat from "./components/chat/chat";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <GlobalStyle/>
        <FontStyle/>
        <BrowserRouter>
          <AuthRoute/>
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
            <Route path="/bossInfo" exact component={BossInfo}/>
            <Route path="/geniusInfo" exact component={GeniusInfo}/>
            <Route path="/chat/:user" exact component={Chat}/>
            <Route component={DashBoard}/>
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
