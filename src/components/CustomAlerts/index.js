import React from 'react';
// nodejs library to set properties for components
import PropTypes from 'prop-types';
// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

import styles from '../../assets/js/components/customInputStyle';

const useStyles = makeStyles(styles);

export default function CustomInput(props) {
  const classes = useStyles();
  const {} = props;

  return <Alert>{title && <AlertTitle>{title}</AlertTitle>}</Alert>;
}

CustomInput.propTypes = {
  
};
