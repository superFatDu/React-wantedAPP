import React, { Component } from "react";
import { connect } from "react-redux";
import { handleBossList } from "./store/actionCreators";
import {Card, WhiteSpace} from "antd-mobile";

class Boss extends Component {
  render() {
    return (
      this.props.bossList.map(item => (
        <div key={item._id}>
          <WhiteSpace/>
          <Card>
            <Card.Header
              title={item.user}
              thumb={item.selectIcon}
              extra={item.title}
            />
            <Card.Body>
              {
                item.desc.split("/n").map(v => (
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
}

const mapState = (state) => ({
  bossList: state.getIn(["boss", "bossList"])
});

const mapDispatch = (dispatch) => {
  return {
    initList() {
      dispatch(handleBossList());
    }
  }
};

export default connect(mapState, mapDispatch)(Boss);