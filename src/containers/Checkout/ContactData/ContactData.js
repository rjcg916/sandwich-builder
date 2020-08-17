import React from 'react';
import Button from '../../../components/UI/Button/Button';
import Input from '../../../components/UI/Input/Input';
import classes from './ContactData.module.css';
import OrdersService from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';



class ContactData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            orderForm: {
                name: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Your Name',
                    },
                    value: ''
                },
                street:
                {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Street',
                    },
                    value: ''
                },
                zipCode:
                {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Zip Code',
                    },
                    value: ''
                },
                city: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'City',
                    },
                    value: ''
                },
                email:
                {
                    elementType: 'input',
                    elementConfig: {
                        type: 'email',
                        placeholder: 'Email',
                    },
                    value: ''
                },
                deliveryMethod:
                {
                    elementType: 'select',
                    elementConfig: {
                        options: [{ value: 'fastest', displayValue: 'Fastest' },
                        { value: 'cheapest', displayValue: 'Cheapest' }]
                    },
                    value: ''
                }
            },
            loading: false
        };

    }

    orderHandler = (event) => {
        event.preventDefault();

        const orderFormData = {};

        for (let id in this.state.orderForm) {
            orderFormData[id] = this.state.orderForm[id].value;
        }

        this.setState((state, props) => {
            return { orderSent: true };
        });

        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            orderData: orderFormData
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

    inputChangeHandler = (event, id) => {
        const updatedOrderForm = {...this.state.orderForm};
        const updatedFormElement = {...updatedOrderForm[id]};
        updatedFormElement.value = event.target.value;
        updatedOrderForm[id] = updatedFormElement;   
        this.setState( {orderForm: updatedOrderForm});
    }

    render() {
        const formElements = [];
        for (let key in this.state.orderForm) {
            formElements.push(
                {
                    id: key,
                    config: this.state.orderForm[key]
                }
            )
        }

        let form = (<form onSubmit={this.orderHandler}>
            {formElements.map(
                e => <Input changeHandler={(event) => this.inputChangeHandler(event, e.id )} key={e.id} elementType={e.config.elementType} elementConfig={e.config.elementConfig}
                    value={e.value} />
            )}
            <Button  buttonType="Success">ORDER</Button>
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