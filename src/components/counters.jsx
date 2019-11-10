import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {

    render() { 
        const {onReset, onDelete, onIncrement, onAddCounter, counters, onDecrement} = this.props
        return ( 
            <div>
                <button onClick={onReset} className="btn btn-primary btn-md">Reset</button>
                {counters.map(counter => (
                <Counter key={counter.id} counter={counter} onDelete={onDelete} onIncrement={onIncrement} onDecrement={onDecrement}/>
                ))}
                <button onClick={onAddCounter} className="btn btn-primary btn-sm m-5">Add Counter</button>
            </div>
         );
    }
}
 
export default Counters;