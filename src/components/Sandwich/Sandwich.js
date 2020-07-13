import React from 'react';
import PropTypes from 'prop-types';
import classes from './sandwich.module.css';
import Ingredient from './Ingredient/Ingredient';

sandwich.propTypes = {
    ingredients: PropTypes.object.isRequired
};

function sandwich(props) {

    const ingredients = Object.keys(props.ingredients).map(
        type =>
            [...Array(props.ingredients[type])].map(
                (_, qty) =>
                    <Ingredient key={type + qty} type={type} />
            ));

    return (
        <div className={classes.Sandwich}>
            <Ingredient type='bread-top' />
            {ingredients}
            <Ingredient type='bread-bottom' />
        </div>
    );
}

export default sandwich;