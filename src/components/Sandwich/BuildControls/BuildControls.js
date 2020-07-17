import React from 'react';
import PropTypes from 'prop-types';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Lettuce', type: 'lettuce' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' }
];

const buildControls = (props) => {
    
    return (
        <div className={classes.BuildControls}>
            <p>Price: <strong> ${props.price.toFixed(2)}</strong> </p>
            {controls.map(c => <BuildControl canRemove={props.ingredients[c.type] > 0} 
                                updateIngredient={ props.ingredientHandler(c.type)} 
                                key={c.label}  
                                name={c.label} />)}
            <button onClick={props.orderHandler} disabled={!props.orderable} className={classes.OrderButton}>ORDER IT!</button>
        </div>
    );
};

buildControls.propTypes = {
    ingredientHandler: PropTypes.func.isRequired,
    ingredients: PropTypes.object.isRequired,
    orderable: PropTypes.bool.isRequired,
    orderHandler : PropTypes.func.isRequired
};

export default buildControls;