import React, { PureComponent } from "react";
import { List, InputItem} from "antd-mobile";
import { connect } from "react-redux";
import { actionCreators } from "./store"
import io from "socket.io-client";
import {
  ChatWrapper
} from "./style";

const socket = io('ws://localhost:8081');
socket.on("getMsg", data => {
  console.log(data);
});

class Chat extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      recvMsg: []
    }
  }
  render() {
    return (
      <ChatWrapper>
        <div className="chat-header">{this.props.match.params.user}</div>
        <div className="chat-main">

        </div>
        <List className="chat-footer">
          <InputItem
            placeholder="请输入"
            value={this.state.text}
            onChange={(v) => {
              this.setState({text: v})
            }}
            extra={<span onClick={() => this.handleChatSubmit()}>发送</span>}
            className="chat-footer-input"
          />
        </List>
      </ChatWrapper>
    )
  }
  componentDidMount() {
    this.props.initList();
  }

  handleChatSubmit() {
    socket.emit("sendMsg", {
      text: this.state.text
    });
    this.setState({
      text: ""
    })
  }
}

const mapState = (state) => ({

});

const mapDispatch = (dispatch) => {
  return {
    initList() {
      dispatch(actionCreators.handleMsgList());
    }
  }
};

export default connect(mapState, mapDispatch)(Chat);