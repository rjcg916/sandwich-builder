import React from 'react';
import PropTypes from 'prop-types';
import classes from './NavItems.module.css';

const navItems = (props) => {
    return (
        <ul className={classes.NavItems} >
            {props.navItems.map( i => 
            <li className={classes.NavItem}  key={i.name} > 
            <a className={i.active ? classes.active : null} href={i.link}>{i.name}</a>
            </li>)}
        </ul>
    );
};

navItems.propTypes = {
    navItems : PropTypes.array.isRequired
};

export default navItems;