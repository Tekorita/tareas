import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import { todos } from './todos.json';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos
    }
  }

  render() {
    const tododos = this.state.todos.map((todo, i) => {
      return(
        <div className="col-md-4">
          <div className="card mt-4 mb-4">
            <div className="card-header">
              <h3>{todo.title}</h3>
              <span className="badge badge-pill badge-danger ml-2">{todo.priority}</span>
            </div>
            <div className="card-body">
              <p>{todo.description}</p>
              <p><mark>{todo.responsable}</mark></p>
            </div>  
          </div>
        </div>  
      )    
    })

    return (
      <div className="App">
          <Navigation titulo=<span className="badge badge-pill badge-light ml-2">{this.state.todos.length}</span>/>
          <img src={logo} className="App-logo" alt="logo" />
          <h3>TITULO CON BOOTSTRAP 4</h3>
          <div className="container">
            <div className="row mt-4">
              { tododos }
            </div>
          </div>
      </div>
    );
  }
}

export default App;
