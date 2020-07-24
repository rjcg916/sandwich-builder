import React from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.module.css';
import OrdersService from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';

class ContactData extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            address: {
                street: '',
                city: '',
                zip: ''
            },
            orderSent: false,
            price: 0

        };

    }

    orderHandler = (event) => {
        event.preventDefault();


        this.setState((state, props) => {
            return { orderSent: true };
        });
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
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
                this.setState({ orderSent: false });
                this.props.history.push("/");
            })
            .catch(error => {
                this.setState({ orderSent: false });;
            })


    }

    render() {
        let form = (<form>
            <input className={classes.Input} type="text" name="name" placeholder="Your Name" />
            <input className={classes.Input} type="email" name="email" placeholder="Your Email" />
            <input className={classes.Input} type="text" name="street" placeholder="Your Street" />
            <input className={classes.Input} type="text" name="zip" placeholder="Your Zip Code" />
            <Button clicked={this.orderHandler} buttonType="Success">ORDER</Button>
        </form>);

        if (this.state.orderSent) {
            form = <Spinner />
        }

        return (
            <div className={classes.ContactData}>
                <h4>Enter your Contact Information</h4>
                {form}
            </div>
        );
    }
}

ContactData.propTypes = {

};

export default ContactData;