import React from 'react';
import PropTypes from 'prop-types';

import classes from './Backdrop.module.css';

const backdrop = (props) => {
   return props.show ? <div onClick={props.clicked} className={classes.Backdrop} ></div> : null
}
backdrop.propTypes = {
   clicked: PropTypes.func.isRequired
};
export default backdrop