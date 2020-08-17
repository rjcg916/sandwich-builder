import React from 'react';

import classes from './Input.module.css';

const input = (props) => {

    let inputElement = null;
    switch (props.elementType) {
        case 'input':
            inputElement = <input onChange={props.changeHandler} className={classes.InputElement}   {...props.elementConfig} value={props.value}/>; 
        break;
        case 'textarea' :
            inputElement = <textarea onChange={props.changeHandler} className={classes.InputElement} {...props.elementConfig} value={props.value}/>;
            break;
        case 'select' :
            inputElement = (<select onChange={props.changeHandler} value={props.value} 
                            className={classes.InputElement}>
                {props.elementConfig.options.map(
                    optElement => <option  key={optElement.value} value={optElement.value} >{optElement.displayValue}</option>
                )}
            </select>);
        break;
        default:
        inputElement = <input onChange={props.changeHandler}  className={classes.inputElement} {...props.elementConfig} value={props.value}/>;
    }

    return (
    <div className={classes.Input}>
        <label className={classes.Label} >{props.label}</label>
        {inputElement}
    </div>)
}

export default input