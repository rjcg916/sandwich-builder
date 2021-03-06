import React from 'react';
import classes from './Ingredient.module.css';
import PropTypes from 'prop-types';


function ingredient(props) {

    let ingredient = null;

    switch (props.type) {
        case 'bread-bottom':
            ingredient = <div className={classes.BreadBottom}></div>
            break;

        case 'bread-top':
            ingredient = (<div className={classes.BreadTop}>
                <div className={classes.Seeds1}></div>
                <div className={classes.Seeds2}></div>
            </div>)
            break;

        case 'meat':
            ingredient = <div className={classes.Meat}></div>
            break;

        case 'cheese':
            ingredient = <div className={classes.Cheese}></div>
            break;

        case 'lettuce':
            ingredient = <div className={classes.Lettuce}></div>
            break;

        default:
            break;
    }

    return ingredient;
}

ingredient.propTypes = {
    type: PropTypes.string.isRequired
}

export default ingredient;
