import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import TodoForm from './components/TodoForm';
import { todos } from './todos.json';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos
    };
    this.handleAddTodo = this.handleAddTodo.bind(this);
    
  }

  handleAddTodo(todo) {
    this.setState({
      todos: [...this.state.todos, todo]
    })
  }

  removeTodo(index) {
    if (window.confirm('Estas seguro de que deseas eliminar la tarea?')){ //Los eventos propios del navegador como confirm o alert para que no den error en react se agregan con la palabra window
        this.setState({
        todos: this.state.todos.filter((e, i) => { //la funcion map recorre un arreglo y te devuelve sus datos, en cambio filter recorre un arreglo y muestra los datos si cumplen con una condicion
          return i !== index
        })
      })
    }
  }

  render() {
    const tododos = this.state.todos.map((todo, i) => {
      return(
        <div className="col-md-4" key={i}>
          <div className="card mt-4 mb-4">
            <div className="card-header">
              <h3>{todo.title}</h3>
              <span className="badge badge-pill badge-danger ml-2">{todo.priority}</span>
            </div>
            <div className="card-body">
              <p>{todo.description}</p>
              <p><mark>{todo.responsable}</mark></p>
            </div>
            <div className="card-footer">
              <button className="btn btn-danger" onClick={this.removeTodo.bind(this, i)}>
                Eliminar
              </button>
            </div>  
          </div>
        </div>  
      );    
    })

    return (
      <div className="App">
          <Navigation titulo=<span className="badge badge-pill badge-light ml-2">{this.state.todos.length}</span>/>
          <img src={logo} className="App-logo" alt="logo" />
          <h3>Gestor de Tareas</h3>
          <div className="container">
            <div className="row mt-4">
              <TodoForm onAddTodo={this.handleAddTodo}/>
              { tododos }
            </div>
          </div>
      </div>
    );
  }
}

export default App;
