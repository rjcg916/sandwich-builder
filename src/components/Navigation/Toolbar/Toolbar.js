import React from 'react';
import classes from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import Menu from '../SideDrawer/Menu/Menu';

import NavItems from '../NavItems/NavItems';

const toolbar = (props) => (
    <header className={classes.Toolbar} >        
        <Menu menuHandler={props.menuHandler} />
        <div className={classes.Logo}>
        <Logo />
        </div>
        <nav className={classes.Desktop}>
            <NavItems navItems={props.navItems}  />
        </nav>
    </header>
);


export default toolbar;