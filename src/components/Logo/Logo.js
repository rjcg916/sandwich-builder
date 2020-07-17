import React from 'react';
import Logo from '../../assets/images/sandwich-logo.png';
import classes from './Logo.module.css';

const logo = (props) => {
    return (
        <div className={classes.Logo}>
            <img alt="SandwichLogo" src={Logo} />
        </div>
    );
};

export default logo;