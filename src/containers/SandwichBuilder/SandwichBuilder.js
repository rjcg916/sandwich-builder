import React, { Component } from 'react';
import Sandwich from '../../components/Sandwich/Sandwich';
import BuildControls from '../../components/Sandwich/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Sandwich/OrderSummary/OrderSummary';
import OrdersService from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner'


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
        ordering: false,
        orderSent: false
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
        // alert('Placing order...');
        this.setState((state, props) => {
            return { orderSent: true };
        });
        const order = {
            ingredients: this.state.ingredients,
            price: this.state.price,
            deliveryMethod: 'fastest',
            customer: {
                name: 'Bob',
                address: {
                    street: '1234 Main',
                    zipCode: 12345,
                    city: 'Los Alantito'
                },
                email: 'dfd@gmail.com'
            }
        }


        OrdersService.post('/orders.json', order)
            .then(response => {
                this.setState({ orderSent: false, ordering: false });
            })
            .catch(error => {
                this.setState({ orderSent: false, ordering: false });;
            })

    }

    cancelOrder = () => {
        this.setState({
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
        );
    }

    render() {
        let orderSummary = <OrderSummary ingredients={this.state.ingredients}
            price={this.state.price}
            cancelOrderHandler={() => this.updateOrderingStatus(false)}
            placeOrderHandler={this.placeOrder} />
        if (this.state.orderSent) {
            orderSummary = <Spinner />
        }
        return (
            <React.Fragment>
                <Modal show={this.state.ordering}
                    closeModalHandler={() => this.updateOrderingStatus(false)} >
                    {orderSummary}
                </Modal>
                <Sandwich ingredients={this.state.ingredients} />
                <BuildControls
                    orderHandler={() => this.updateOrderingStatus(true)}
                    orderable={this.state.orderable}
                    price={this.state.price}
                    ingredients={this.state.ingredients}
                    ingredientHandler={this.updateSandwich} />
            </React.Fragment>
        );
    }
}

export default SandwichBuilder;