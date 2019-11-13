import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { dashboard, reinstateSub } from "../constants/routes";

function IsActiveHOC(props) {
  if (props.business.loading || props.business.active) {
    return props.children;
  } else {
    props.history.replace(`${dashboard}${reinstateSub}`);
    return null;
  }
}

export default connect(
  state => ({ business: state.business }),
  null
)(withRouter(IsActiveHOC));
