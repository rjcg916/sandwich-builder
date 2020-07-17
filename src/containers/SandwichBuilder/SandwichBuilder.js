import React, { Component } from 'react';
import Sandwich from '../../components/Sandwich/Sandwich';
import BuildControls from '../../components/Sandwich/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Sandwich/OrderSummary/OrderSummary';


const INGREDIENT_PRICES = {
    lettuce: 0.5,
    cheese: .75,
    meat: 1.4
};

class SandwichBuilder extends Component {

    state = {
        ingredients:
        {
            'lettuce': 0,
            'cheese': 0,
            'meat': 0,
        },
        price: 4,
        orderable: false,
        ordering: false
    }


    modifySandwich = (ingredient) => (changeQty) => {
        const orgQty = this.state.ingredients[ingredient];
        const requestedQty = this.state.ingredients[ingredient] + changeQty;
        const newQty = requestedQty < 0 ? 0 : requestedQty;
        const newPrice = INGREDIENT_PRICES[ingredient] * (newQty - orgQty) + this.state.price;
        const newIngredients = { ...this.state.ingredients };
        newIngredients[ingredient] = newQty;
        const newOrderable = Object.values(newIngredients)
            .reduce((totalCount, itemCount) => totalCount + itemCount) > 0;
        this.setState({
            ingredients: newIngredients,
            price: newPrice,
            orderable: newOrderable
        })
    }

    ordering = () => this.state.ordering ? null : this.setState({ ordering: true });

    render() {
        return (
            <React.Fragment>
                <Modal show={this.state.ordering}  >
                    <OrderSummary ingredients={this.state.ingredients}
                                      price={this.state.price} />
                </Modal>      
                <Sandwich ingredients={this.state.ingredients} />
                <BuildControls orderHandler={this.ordering} orderable={this.state.orderable} price={this.state.price} ingredients={this.state.ingredients} ingredientHandler={this.modifySandwich} />
            </React.Fragment>
        );
    }
}

export default SandwichBuilder;