import React, { Component } from "react";
import PureComponentEx from "./PureComponentEx";
import RegularComponent from "./RegularComponent";

class ParentComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Krishna",
      count: 0,
    };
    setTimeout(() => {
      this.setState({
        name: "Krishna",
      });
      console.log("===========Name=============");
    }, 1000);

    setTimeout(() => {
      this.setState({
        count: this.state.count + 1,
      });
      console.log("===========Count=============");
    }, 2000);
  }
  render() {
    return (
      <div>
        Hello {this.state.name}
        <PureComponentEx {...this.state} />
        <RegularComponent {...this.state} />
      </div>
    );
  }
}

export default ParentComp;
