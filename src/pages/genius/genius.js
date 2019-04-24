import React, { Component } from "react";
import { connect } from "react-redux";
import { handleGeniusList } from "./store/actionCreators";
import {Card, WhiteSpace} from "antd-mobile";

class Genius extends Component {
  render() {
    return (
      this.props.geniusList.map(item => (
        <div
          key={item._id}
          onClick={() => this.handleToChat(item)}
        >
          <WhiteSpace/>
          <Card>
            <Card.Header
              title={item.user}
              thumb={item.selectIcon}
              extra={item.title}
            />
            <Card.Body>
              {
                item.desc.split("\n").map(v => (
                  <div key={item._id}>{v}</div>
                ))
              }
            </Card.Body>
            <Card.Footer content="2019-04-24" style={{marginTop: 10}}/>
          </Card>
        </div>
      ))
    )
  }
  componentDidMount() {
    this.props.initList();
  }
  handleToChat(v) {
    this.props.history.push(`/chat/${v._id}`);
  }
}

const mapState = (state) => ({
  geniusList: state.getIn(["genius", "geniusList"])
});

const mapDispatch = (dispatch) => {
  return {
    initList() {
      dispatch(handleGeniusList());
    }
  }
};

export default connect(mapState, mapDispatch)(Genius);