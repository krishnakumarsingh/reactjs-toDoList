import React, { Component } from "react";

class ChildLifeCycle extends Component {
  constructor(props) {
    debugger;
    super(props);
    this.state = {
      name: "Kumar",
    };
  }
  componentDidCatch() {
    debugger;
    this.setState(
      {
        name: this.state.name + "1",
      },
      console.log("componentDidCatch", this.state.name)
    );
  }
  componentDidMount() {
    debugger;
    this.setState(
      {
        name: this.state.name + "2",
      },
      console.log("componentDidMount", this.state.name)
    );
  }
  componentDidUpdate() {
    debugger;
    console.log("componentDidUpdate", this.state.name);
  }
  componentWillMount() {
    debugger;
    this.setState(
      {
        name: this.state.name + "4",
      },
      console.log("componentWillMount", this.state.name)
    );
  }
  componentWillReceiveProps() {
    debugger;
    this.setState(
      {
        name: this.state.name + "5",
      },
      console.log("componentWillReceiveProps", this.state.name)
    );
  }
  componentWillUnmount() {
    debugger;
    this.setState(
      {
        name: this.state.name + "6",
      },
      console.log("componentWillUnmount", this.state.name)
    );
  }
  componentWillUpdate() {
    debugger;
    /* this.setState(
      {
        name: this.state.name + "7",
      },
      console.log("componentWillUpdate", this.state.name)
    ); */
  }
  render() {
    debugger;
    const style = { color: "red" };
    return (
      <>
        <div style={style}>
          {console.log(this.state.name)}Hello, Child Life Cycle
        </div>
        {/* <ol>
          <li>constructor</li>
          <li>constructor</li>
          <li>componentWillMount</li>
          <li>render</li>
          <li>render</li>
          <li>componentDidMount</li>
          <li>componentWillReceiveProps</li>
          <li>componentWillUpdate</li>
          <li>render</li>
          <li>render</li>
          <li>componentDidUpdate</li>
          <li>componentWillReceiveProps</li>
          <li>componentWillUpdate</li>
          <li>render</li>
          <li>render</li>
          <li>componentDidUpdate</li>
          <hr />
          <li>componentDidMount</li>
          <li>componentWillUpdate</li>
          <li>render</li>
          <li>componentDidUpdate</li>
        </ol> */}
      </>
    );
  }
}

export default ChildLifeCycle;
