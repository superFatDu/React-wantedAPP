import React, { PureComponent } from "react";
import { List, InputItem} from "antd-mobile";
import { connect } from "react-redux";
import { actionCreators } from "./store"
import io from "socket.io-client";
import { getChatterIcon } from "../../api/chat";
import {
  ChatWrapper
} from "./style";

const socket = io('ws://localhost:8081');
socket.on("recvMsg", data => {
  console.log(data);
});

class Chat extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      chatterInfo: {}
    }
  }
  render() {
    return (
      <ChatWrapper>
        <div className="chat-header">{this.props.match.params.user}</div>
        <div className="chat-main">
          {
            this.props.msgList.length !== 0
              ? this.props.msgList.map(v => (
                  v.from === this.props.user._id
                    ? <p className="chat-from" key={v._id}>
                        <span>{v.content}</span><img src={this.props.user.selectIcon} alt=""/>
                      </p>
                    : <p className="chat-to" key={v._id}>
                        <img src={this.state.chatterInfo.selectIcon} alt=""/><span>{v.content}</span>
                      </p>
                ))
              : null
          }
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
    const from = this.props.user._id;
    const to = this.props.match.params.user;
    const chat_id = [from, to].sort().join('_');
    this.props.initList(chat_id);
    this.props.recvMsg();
    getChatterIcon({_id: to}).then(res => {
      if (res.status === 200) {
        res = res.data;
        this.setState({
          chatterInfo: res.data
        })
      }
    });
    document.querySelector(".chat-main").scrollTo(0,document.querySelector(".chat-main").scrollHeight);
  }

  handleChatSubmit() {
    const from = this.props.user._id;
    const to = this.props.match.params.user;
    const msg = this.state.text;
    this.props.sendMsg(from, to, msg);
    this.setState({
      text: ""
    })
  }
}

const mapState = (state) => ({
  user: state.getIn(["info", "data"]),
  msgList: state.getIn(["chat", "chatMsg"])
});

const mapDispatch = (dispatch) => {
  return {
    initList(chat_id) {
      dispatch(actionCreators.handleMsgList(chat_id));
    },
    sendMsg(from, to, msg) {
      dispatch(actionCreators.sendMsg(from, to, msg));
    },
    recvMsg() {
      dispatch(actionCreators.recvMsg());
    }
  }
};

export default connect(mapState, mapDispatch)(Chat);