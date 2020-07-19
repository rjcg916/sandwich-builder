
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import React, { Component } from 'react';


class Layout extends Component {

    state = {
        sideDrawerOpen: false
    }

    sideDrawerHandler = () => {
        this.setState((prevState) => {
            return { sideDrawerOpen: !prevState.sideDrawerOpen }
        })
    }

    render() {
        const appNavItems = [{ name: 'Sandwich Builder', link: '/', active: false },
        { name: 'Checkout', link: '/', active: true }];
        return (
            <React.Fragment>
                <Toolbar navItems={appNavItems} menuHandler={this.sideDrawerHandler} />
                <SideDrawer navItems={appNavItems}
                    show={this.state.sideDrawerOpen}
                    sideDrawerHandler={this.sideDrawerHandler} />
                <main className={classes.Content} >{this.props.children}</main>
            </React.Fragment>
        )
    }
}


export default Layout;