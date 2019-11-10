import React, { Component} from 'react';
import './App.css';
import Counters from './components/counters';
import Navbar from './components/navbar';

class App extends Component {
  state = { 
    counters: [
        {id: 1, value:4},
        {id: 2, value:0},
        {id: 3, value:0},
        {id: 4, value:0}
    ]
 }

 handleReset = () => {
     const counters = this.state.counters.map(c => {
         c.value = 0
         return c;
     });
     this.setState({counters});
 }

 handleIncrement = counter => {
     const counters = [...this.state.counters];
     const index = counters.indexOf(counter);
     counters[index] = {...counter}
     counters[index].value++;
     this.setState({counters});
 }
 handleDelete = counterId => {
     const counters = this.state.counters.filter(c => c.id !== counterId)
     this.setState({counters})
 }

 handleDecrement = counter => {
    const counters = [...this.state.counters];
     const index = counters.indexOf(counter);
     counters[index] = {...counter}
     counters[index].value--;
     this.setState({counters});
 }

 addCounter = () => {
     const counters = [...this.state.counters];
     let newId = 1;
     if (counters.length > 0){
         const ids = counters.map(counter => {
             return counter.id;
         })
         const maxId = Math.max.apply(null, ids);
         newId = maxId + 1;
     } 
     const newCounter = {id: newId, value: 0};
     counters.push(newCounter);
     this.setState({counters});

 }
  render() {
  return (<>
            <Navbar totalCounters={this.state.counters.filter(c => c.value > 0).length}/>
             <main className="container">
                 <Counters onReset={this.handleReset} onIncrement={this.handleIncrement} onDelete={this.handleDelete} onAddCounter={this.addCounter} counters={this.state.counters} onDecrement={this.handleDecrement}/> 
             </main>   
         </>
             );
  }
}


export default App;
