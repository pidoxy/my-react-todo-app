import React, { Component } from 'react';
import './App.css';
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
          completed: true
        },
        {
          id: 3,
          title: 'Do some house chores',
          completed: true
        },
        {
          id: 4,
          title: 'Go grocery shopping',
          completed: false
        }
      ]
    }
  }

  markComplete = (e) => {
    console.log('From App js')
}



  render() {
    // const listItem = () => {
    //   for (let i = 0; i < this.state.todos.length; i++) {
    //   return  <li>{this.state.todos[i].title}</li>
    //   }
    // }

  
   return (
      <div className="App">
        <Addtodo />
        <Todos list={this.state.todos} markComplete={this.markComplete} />
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