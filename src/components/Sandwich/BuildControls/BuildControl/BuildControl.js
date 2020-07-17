import React from 'react';
import PropTypes from 'prop-types';
import classes from './BuildControl.module.css';

const buildControl = (props) => {
    return (
        <div className={classes.BuildControl}>
            <div className={classes.Label}>{props.name}</div>
            <button onClick={ () => props.ingredientHandler( 1)} className={classes.Add}>Add</button>
            <button disabled={!props.canRemove} onClick={ () => props.ingredientHandler( -1)}  className={classes.Remove}>Remove</button>
          </div>
    );
};

buildControl.propTypes = {
    name: PropTypes.string.isRequired,
    ingredientHandler: PropTypes.func.isRequired,
    canRemove: PropTypes.bool.isRequired
};

export default buildControl;