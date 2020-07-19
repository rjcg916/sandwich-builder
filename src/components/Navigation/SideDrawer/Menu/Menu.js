import React from 'react';
import PropTypes from 'prop-types';


import classes from './Menu.module.css';

const menu = (props) => {

    return <div onClick={props.menuHandler} className={classes.Menu}>
       <div></div>
       <div></div>
       <div></div>
    </div>

}

menu.propTypes = {
    menuHandler: PropTypes.func.isRequired
};

export default menu 