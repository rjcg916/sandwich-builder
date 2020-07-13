import React, { Component } from 'react';
import Sandwich from '../../components/Sandwich/Sandwich';

class SandwichBuilder extends Component {

    state = {
        ingredients:
        {
            'lettuce': 1,
            'cheese': 1,
            'meat': 2,
        }
    }

    render() {
        return (
            <React.Fragment>
                <Sandwich ingredients={this.state.ingredients} />
                <div>Build Controls</div>
            </React.Fragment>
        );
    }
}

export default SandwichBuilder;