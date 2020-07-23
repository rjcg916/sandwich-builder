import React from 'react';
import Sandwich from '../../Sandwich/Sandwich';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.module.css';

const checkoutSummary = (props) => {
    return (
        <div className={classes.CheckoutSummary} >
            <h1>We hope your sandwich taste good!</h1>
            <div style={{width: '100%'}}>
                <Sandwich ingredients={props.ingredients} />
            </div>
            <Button clicked={props.checkoutContinue} buttonType="Success">CONTINUE</Button>
            <Button clicked={props.checkoutCancel} buttonType="Danger">CANCEL</Button>
        </div>
    );
}

export default checkoutSummary;