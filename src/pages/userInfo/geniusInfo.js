import React, { PureComponent } from "react";
import { InputItem, TextareaItem, Grid } from "antd-mobile";
import { connect } from "react-redux";
import { handleInfoSubmit, handleIsUpdated } from "./store/actionCreators";
import { Redirect } from "react-router-dom";
import {
  InfoWrapper,
  InfoTitle,
  AvatarSelector,
  InfoList,
  InfoSubmit
} from "./style";
import AuthRoute from "../../components/authRoute/authRoute";

class GeniusInfo extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectIcon: "",
      avatar: "",
      title: "",
      desc: ""
    }
  }
  render() {
    const avatarList = 'boy,girl,man,woman,chick,crab,koala,tiger,whale,zebra'.split(",")
      .map(item => ({
        icon: require(`../../statics/img/avatar/${item}.png`),
        text: item
      }));
    return this.props.redirectTo === "" ? (
      <InfoWrapper>
        <AuthRoute/>
        <InfoTitle>牛人信息完善</InfoTitle>
        <AvatarSelector>
          <div className="selected-icon">
            您选择的头像：<img src={this.state.selectIcon} alt=""/>
          </div>
          <Grid data={avatarList} columnNum={5} onClick={(item) => this.handleAvatar(item)}/>
        </AvatarSelector>
        <InfoList>
          <InputItem className="listItem" onChange={(v) => this.handleInputChange("title", v)}>求职岗位</InputItem>
          <TextareaItem className="listItem" rows={2} autoHeight title="个人简介" onChange={(v) => this.handleInputChange("desc", v)}/>
        </InfoList>
        <InfoSubmit onClick={() => this.props.handleInfoSubmit(this.state)}>提交</InfoSubmit>
      </InfoWrapper>
    ) : <Redirect to={this.props.redirectTo}/>
  }
  handleAvatar(item) {
    this.setState({
      selectIcon: item.icon,
      avatar: item.text
    })
  }
  handleInputChange(key, v) {
    this.setState({
      [key]: v
    })
  }
  componentDidMount() {
    this.props.handleUpdated();
  }
}

const mapStateToProps = (state) => ({
  redirectTo: state.getIn(["info", "redirectTo"]),
});

const mapDispatchToProps = (dispatch) => {
  return {
    handleInfoSubmit(data) {
      dispatch(handleInfoSubmit(data));
    },
    handleUpdated() {
      dispatch(handleIsUpdated());
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(GeniusInfo);