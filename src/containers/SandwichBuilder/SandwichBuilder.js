import React, { Component } from 'react';
import Sandwich from '../../components/Sandwich/Sandwich';
import BuildControls from '../../components/Sandwich/BuildControls/BuildControls'

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
        price: 4
    }

     modifySandwich = (ingredient) => (changeQty) => {
            const orgQty = this.state.ingredients[ingredient];
            const requestedQty = this.state.ingredients[ingredient] + changeQty;
            const newQty = requestedQty < 0 ? 0 : requestedQty;
            const newPrice = INGREDIENT_PRICES[ingredient] * (newQty - orgQty) + this.state.price;
            const newIngredients = { ...this.state.ingredients };
            newIngredients[ingredient] = newQty;
            this.setState({ ingredients: newIngredients, price: newPrice })
        }
     
    render() {
        return (
            <React.Fragment>
                <Sandwich ingredients={this.state.ingredients} />
            
                <BuildControls price={this.state.price} ingredients={this.state.ingredients} ingredientHandler={this.modifySandwich}  />
            </React.Fragment>
        );
    }
}

export default SandwichBuilder;