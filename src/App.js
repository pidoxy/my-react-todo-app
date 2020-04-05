import React, { Component } from 'react';
import './App.css';
import Header from './Component/layout/Header'
import Todos from './Component/Todos'
import Addtodo from './Component/Addtodo'
import { v4 as uuidv4} from 'uuid';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      todos: [
        {
          id: uuidv4(),
          title: 'Play the guitar',
          completed: false
        },
        {
          id: uuidv4(),
          title: 'Do Laundry',
          completed: false
        },
        {
          id: uuidv4(),
          title: 'Do some house chores',
          completed: false
        },
        {
          id: uuidv4(),
          title: 'Go grocery shopping',
          completed: false
        }
      ]
    }

    this.done = (id) => {
      this.setState({
        todos: this.state.todos.map(todo => {
          if (todo.id === id) {
            todo.completed = !todo.completed              // I don't know what name to call this: maybe a condition in a condition?
          }
          return todo;
        }
        )
      })
    }

    this.delete = (id) => {
      this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
    }

    this.addTodo = (newTodo) => {
      console.log(newTodo)
      newTodo  = {
        id: uuidv4(),
        title: newTodo,
        completed: false
      }
      this.setState({ todos: [...this.state.todos, newTodo]})
    }

  }


  render() {
    return (
      <div className="App">
        <Header />
        <Addtodo addTodo={this.addTodo} />
        <Todos list={this.state.todos} done={this.done} delete={this.delete} />
      </div>

    );
  }
}

export default App;


