import React from 'react';
import classes from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavItems from '../NavItems/NavItems';

const toolbar = (props) => (
    <header className={classes.Toolbar} >
        <div>MENU</div>
        <Logo />
        <nav>
            <NavItems items={[{name: 'Sandwich Builder', link: '/', active: false}, {name: 'Checkout', link: '/', active: true}]} />
        </nav>
    </header>
);


export default toolbar;