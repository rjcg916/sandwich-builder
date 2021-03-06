import React, { Component } from 'react';
import Sandwich from '../../components/Sandwich/Sandwich';
import BuildControls from '../../components/Sandwich/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Sandwich/OrderSummary/OrderSummary';
import OrdersService from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'


const INGREDIENT_PRICES = {
    lettuce: 0.5,
    cheese: .75,
    meat: 1.4
};

class SandwichBuilder extends Component {

    state = {
        ingredients: null,
        price: 4,
        orderable: false,
        ordering: false,
        orderSent: false
    }

    componentDidMount() {
        OrdersService.get('/ingredients.json')
            .then(response => {
                this.setState({ ingredients: response.data });
            })
            .catch( () => null) 

    }

    updateSandwich = (ingredient) => (changeQty) => {
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

    updateOrderingStatus = (isOrdering) => (this.state.ordering !== isOrdering) ?
        this.setState({ ordering: isOrdering }) : null;

    placeOrder = () => {
        const queryParams = [];
        for (let i in this.state.ingredients) {
            queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]));
        }
        queryParams.push("price=" +  encodeURIComponent(this.state.price));
        const queryString = queryParams.join('&');
        this.props.history.push({
            pathname: '/checkout',
            search: '?' + queryString
        });



    }


    render() {
        let orderSummary = <Spinner />
        let sandwich = <Spinner />

        if (this.state.ingredients) {

            sandwich = <React.Fragment>
                <Sandwich ingredients={this.state.ingredients} />
                <BuildControls
                    orderHandler={() => this.updateOrderingStatus(true)}
                    orderable={this.state.orderable}
                    price={this.state.price}
                    ingredients={this.state.ingredients}
                    ingredientHandler={this.updateSandwich} />
            </React.Fragment>

            if (!this.state.orderSent) {
                orderSummary = <OrderSummary ingredients={this.state.ingredients}
                    price={this.state.price}
                    cancelOrderHandler={() => this.updateOrderingStatus(false)}
                    placeOrderHandler={this.placeOrder} />
            }
        }

        return (
            <React.Fragment>
                <Modal show={this.state.ordering}
                    closeModalHandler={() => this.updateOrderingStatus(false)} >
                    {orderSummary}
                </Modal>
                {sandwich}
            </React.Fragment>
        );
    }
}

export default withErrorHandler(SandwichBuilder, OrdersService);