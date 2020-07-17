import React from 'react';
import PropTypes from 'prop-types';

const orderSummary = (props) => 
        <React.Fragment>
            <h3>Your Order</h3>
            <p> A delicious sandwich with the following ingredients:</p>
            <ul>
            {Object.keys(props.ingredients).map( name => 
                <li key={name}> <span style={{textTransform: 'capitalize'}}> {name} </span> ({props.ingredients[name]}) </li>
            )}
            </ul>
            <div>Price: ${props.price.toFixed(2)} </div>
            <p>Continue to checkout?</p>
        </React.Fragment>;

orderSummary.propTypes = {
    ingredients: PropTypes.object.isRequired,
    price: PropTypes.number.isRequired
}

export default orderSummary;