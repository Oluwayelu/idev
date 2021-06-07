import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";

// @material-ui/core components
import Snackbar from "@material-ui/core/Snackbar";

import CustomAlert from "../CustomAlerts"

export default function CustomSnackbar(props) {
  const { anchorOrigin, open, onClose, children } = props;

  return (
    <Snackbar anchorOrigin={anchorOrigin} open={open} onClose={onClose}>
      <CustomAlert severity={severity}>
        {children}
      </CustomAlert>
    </Snackbar>
  );
}

CustomSnackbar.propTypes = {
  anchorOrigin: PropTypes.object,
  open: PropTypes.bool,
  onClose: PropTypes.bool
};
