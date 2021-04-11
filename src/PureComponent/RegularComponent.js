import React, { Component } from "react";

class RegularComponent extends Component {
  render() {
    const { name, count } = this.props;
    console.log("RegularComponent: ", name, count);
    return (
      <div>
        Regular Component: {name} {count}
      </div>
    );
  }
}

export default RegularComponent;
