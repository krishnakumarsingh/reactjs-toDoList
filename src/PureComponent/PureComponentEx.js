import React, { PureComponent } from "react";

class PureComponentEx extends PureComponent {
  render() {
    const { name, count } = this.props;
    console.log("PureComponentEx: ", name, count);
    return (
      <div>
        Pure Component Example: {name} {count}
      </div>
    );
  }
}

export default PureComponentEx;
