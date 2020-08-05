import React, { Component } from 'react';
import Order from '../../components/Order/Order'
import OrderService from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import OrdersService from '../../axios-orders';

class Orders extends Component {

    state = {orders: [],
            loading: true
    }
 
    componentDidMount() {
        OrderService.get('/orders.json')
        .then( res => {
            const fetchedOrders = [];
            for (let key in res.data) {
                fetchedOrders.push({...res.data[key], id: key})
            }       
            this.setState({loading: false, orders: fetchedOrders});
            console.log(this.state.orders)
        })
        .catch(
            res => {
                this.setState({loading: false}) 
            }
        );
    }

    render() {
        return (
            <div>
                {this.state.orders.map( o => <Order key={o.id} price={o.price} ingredients={o.ingredients} />)}              
            </div>
        )
    }
}

export default withErrorHandler(Orders, OrdersService);