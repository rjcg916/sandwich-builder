import React from 'react';
import classes from './Order.module.css';

const order = (props) => {

    let ingredients = [];

    for (let i in props.ingredients) {
        let count = +props.ingredients[i];
        if (count > 0) {
            ingredients.push({ name: i, count: count });
        }
    }

    const ingredientsDisplay =
        ingredients.map(i => {
            return (
                <span style={{textTransform: 'capitalize', display: 'inline-block', margin: '0px 5px', padding: '0px 4px', border: '1px solid'}} key={i.name}> {i.name} ({i.count}) </span>
            )
        })

    return (
        <div className={classes.Order}>
            <p>{ingredientsDisplay}</p>
            <p>Price: <strong>{props.price} USD</strong></p>
        </div>
    );
};

export default order;