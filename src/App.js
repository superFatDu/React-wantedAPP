import React, { Component } from 'react';
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter, Route } from "react-router-dom";
import { GlobalStyle } from "./style";
import { FontStyle } from "./statics/iconfont/iconfont";
import Login from "./pages/user/login";
import Register from "./pages/user/regist";
import AuthRoute from "./components/authRoute/authRoute";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <GlobalStyle/>
        <FontStyle/>
        <BrowserRouter>
          <AuthRoute/>
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
