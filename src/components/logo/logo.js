import React, { PureComponent } from "react";
import { LogoWrapper, LogoImg } from "./style";

class Logo extends PureComponent {
  render() {
    return (
      <LogoWrapper>
        <LogoImg/>
      </LogoWrapper>
    )
  }
}

export default Logo;