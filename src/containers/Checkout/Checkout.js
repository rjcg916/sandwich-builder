import React, { Component } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
class Checkout extends Component {
    state = {
        ingredients: {
            lettuce: 1,
            cheese: 1,
            meat: 1
        }
    };

    componentDidMount() {


        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        for (let param of query.entries()) {
            // ['salad', '1']
            ingredients[param[0]] = +param[1];
        }
        this.setState({ingredients: ingredients});

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
            </div>
        );
    }
}

export default Checkout;