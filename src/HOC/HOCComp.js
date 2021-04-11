import React from "react";

const HOC = (OriginalComponent) => {
  class CheckNameHoc extends React.Component {
    render() {
      console.log("HOC", this.props.name);
      return <OriginalComponent {...this.props} />;
    }
  }
  return CheckNameHoc;
};
export default HOC;
