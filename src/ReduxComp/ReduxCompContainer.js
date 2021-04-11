import { connect } from "react-redux";
import ReduxCompComponent from "./ReduxCompComponent";
import { cartAdd, changeFieldValue } from "./action";

const mapStateToProps = (state) => {
  return {
    counter: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    cartAdd: () => dispatch(cartAdd()),
    changeFieldValue: (name, value) => dispatch(changeFieldValue(name, value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReduxCompComponent);
