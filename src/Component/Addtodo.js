import React, { Component } from 'react'

 export class Addtodo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newTodo: ''
        }
    

    this.updateTodoText = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    this.submit = (event) => {
        event.preventDefault();
        this.props.addTodo(this.state.newTodo);
        this.setState({ newTodo: '' });

    }

}

    render() {
        return (
            <form onSubmit={this.submit} className='Add-todo'>
                <input 
                type='text' 
                name='newTodo' 
                placeholder='Add Todo...' 
                value={this.state.newTodo} 
                onChange={this.updateTodoText}
                
                 />
                <input 
                className='btn'
                type='submit' 
                value='submit' 
                 />
            </form>
        )
    }
}

export default Addtodo
