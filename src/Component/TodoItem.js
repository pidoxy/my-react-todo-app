import React, { Component } from 'react'

class TodoItem extends Component {
    constructor(props) {
        super(props)

        this.getStyle = () => {
            if (this.props.item.completed) {
                return {
                    textDecoration: 'line-through'
                }
            } else {
                return {
                    textDecoration: 'none'
                }
            }
        }
    }
    render() {

        const { id} = this.props.item;

        return (
            <div style={this.getStyle()} className='todolist'>
                <input type='checkbox' onChange={this.props.done.bind(this, id)} />{' '}
                <li className='todo' >{this.props.item.title}</li>
                <button onClick={this.props.delete.bind(this, id)} className='btnStyle'>X</button>
            </div>
        )
    }
}


export default TodoItem
