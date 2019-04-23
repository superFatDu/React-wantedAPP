import React, { Component } from "react";
import { connect } from "react-redux";
import { handleBossList } from "./store/actionCreators";

class Boss extends Component {
  render() {
    return (
      <div>b0ss</div>
    )
  }
  componentDidMount() {
    this.props.initList();
  }
}

const mapState = (state) => ({

});

const mapDispatch = (dispatch) => {
  return {
    initList() {
      dispatch(handleBossList());
    }
  }
};

export default connect(mapState, mapDispatch)(Boss);