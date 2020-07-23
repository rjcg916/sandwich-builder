import React from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.module.css';

class ContactData extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            address :{
                street: '',
                city: '',
                zip: ''
            }

        };

    }

    render() {
        return (
            <div className={classes.ContactData}>
                <h4>Enter your Contact Information</h4>
                <form>
                    <input className={classes.Input} type="text" name="name" placeholder="Your Name" />
                    <input className={classes.Input} type="email" name="email" placeholder="Your Email" />
                    <input className={classes.Input} type="text" name="street" placeholder="Your Street" />
                    <input className={classes.Input} type="text" name="zip" placeholder="Your Zip Code" />  
                    <Button buttonType="Success">ORDER</Button>                       
                </form>
            </div>
        );
    }
}

ContactData.propTypes = {

};

export default ContactData;