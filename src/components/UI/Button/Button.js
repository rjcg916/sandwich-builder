import React from 'react';
import PropTypes from 'prop-types';

import classes from './Button.module.css';

const button = (props) => {

    return <button className={[classes.Button, classes[props.buttonType]].join(' ')} onClick={props.clicked}>{props.children}</button>
}

button.propTypes = {
    clicked: PropTypes.func.isRequired,
    buttonType: PropTypes.string.isRequired
};

export default button