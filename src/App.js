import React, { Component } from 'react';
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter, Route } from "react-router-dom";
import { GlobalStyle } from "./style";
import { FontStyle } from "./statics/iconfont/iconfont";
import Login from "./pages/user/login";
import Register from "./pages/user/regist";
import axios from "axios";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <GlobalStyle/>
        <FontStyle/>
        <BrowserRouter>
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
        </BrowserRouter>
      </Provider>
    );
  }
  componentDidMount() {
    axios.get("/users/getUser").then(res => {
      console.log(res.data);
    })
  }
}

export default App;
