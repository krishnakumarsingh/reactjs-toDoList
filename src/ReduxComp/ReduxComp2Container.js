import { connect } from "react-redux";
import ReduxComp2Component from "./ReduxComp2Component";
import { filterValue } from "./action";

const mapStateToProps = (state) => {
  return {
    counter: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    filterValue: (name, value) => dispatch(filterValue(name, value)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReduxComp2Component);
