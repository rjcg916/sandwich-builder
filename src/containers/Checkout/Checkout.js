import React, { Component } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from '../Checkout/ContactData/ContactData';

import {Route} from "react-router-dom";

class Checkout extends Component {
    state = {
        ingredients: null,
        price: 0
    };

    componentWillMount() {

        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        let price = 0;

        for (let param of query.entries()) {
            (param[0] === "price") ?  price = +param[1] :
                                    // ['salad', '1']
                                    ingredients[param[0]] = +param[1];
        }
        
        this.setState({ingredients: ingredients, price: price});

    }

    checkoutContinueHandler = () => {
        this.props.history.replace('/checkout/contact')
    }

    checkoutCancelHandler = () => {
        this.props.history.goBack();
    }

    render() {
        return (
            <div>
                
                <CheckoutSummary checkoutContinue={this.checkoutContinueHandler} 
                                 checkoutCancel={this.checkoutCancelHandler} 
                                 ingredients={this.state.ingredients} />
                <Route path={this.props.match.path + '/contact'} 
                       render={(props) => <ContactData ingredients={this.state.ingredients}
                                                  price={this.state.price} {...props} />} />
            </div>
        );
    }
}

export default Checkout;