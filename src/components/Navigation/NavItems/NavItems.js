import React from 'react';
import {NavLink} from 'react-router-dom';

import PropTypes from 'prop-types';
import classes from './NavItems.module.css';

const navItems = (props) => {
    return (
        <ul className={classes.NavItems} >
            {props.navItems.map( i => 
            <li className={classes.NavItem}  key={i.name} > 
            <NavLink exact activeClassName={classes.active} to={i.link}>{i.name}</NavLink>
            </li>)}
        </ul>
    );
};

navItems.propTypes = {
    navItems : PropTypes.array.isRequired
};

export default navItems;