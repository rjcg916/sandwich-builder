import React from 'react';
import PropTypes from 'prop-types';
import classes from './sandwich.module.css';
import Ingredient from './Ingredient/Ingredient';

sandwich.propTypes = {
    ingredients: PropTypes.object.isRequired
};

function sandwich(props) {

    let ingredients = Object.keys(props.ingredients).map(
        type =>
            [...Array(props.ingredients[type])].map(
                (_, i) =>
                    <Ingredient key={type + i} type={type} />
            ));


    if (ingredients.map(i => i.length).reduce((total, current) => total + current) === 0) {
        ingredients = <p>Please select one or more ingredients.</p>
    }

    return (
        <div className={classes.Sandwich}>
            <Ingredient type='bread-top' />
            {ingredients}
            <Ingredient type='bread-bottom' />
        </div>
    );
}

export default sandwich;