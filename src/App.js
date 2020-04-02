import React, { Component } from 'react';
import './App.css';
import Header from './Component/layout/Header'
import Todos from './Component/Todos'
import Addtodo from './Component/Addtodo'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      todos: [
        {
          id: 1,
          title: 'Play the guitar',
          completed: false
        },
        {
          id: 2,
          title: 'Do Laundry',
          completed: false
        },
        {
          id: 3,
          title: 'Do some house chores',
          completed: false
        },
        {
          id: 4,
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
      // this.setState({ todos: [...]})
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


// import React from 'react';
// import './App.css';
// import { render } from 'react-dom';

// function App() {
//   return (
//     <div className="App">
//      <h1>App</h1>
//     </div>
//   );
// }

// export default App;