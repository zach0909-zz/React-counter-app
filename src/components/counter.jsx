import React, { Component} from 'react';


class Counter extends Component {
    render() {
        return (
        <div className="row">
            <div className="col-1">
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            </div>
            <div className="col">
                <button className="btn btn-secondary btn-sm" onClick={() => this.props.onIncrement(this.props.counter)}>+</button>
                <button onClick={() => this.props.onDecrement(this.props.counter)} className="btn btn-secondary btn-sm m-2" disabled={this.props.counter.value === 0 ? 'disabled' : ''}>-</button>
                <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
            </div>
        </div>
        );
    }

    getBadgeClasses(){
        let classes = "badge m-2 ";
        classes += this.props.counter.value === 0 ? 'badge-warning' : 'badge-primary';
        return classes;
    }
    formatCount() {
        const {value: count} = this.props.counter;
        return count === 0 ? 'zero' : count;
    }

    
}

export default Counter;