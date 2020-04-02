import React, { Component } from 'react';
import PropTypes from 'prop-types';    // I'm not exactly sure what function PropTypes serves
import TodoItem from './TodoItem'


class Todos extends Component {
    render() {
        return this.props.list.map((item) => ( 
            <TodoItem key={item.id} item={item} done={this.props.done} delete={this.props.delete}/>
            // <div className='todolist'>
            //     <input type='checkbox' checked={item.completed} /><li className='todo' key={item.id}>{item.title}</li>
                

            // </div>
        ));
    }
}

Todos.propTypes = {                                // I need clarificaton on this
    list: PropTypes.array.isRequired
}

export default Todos;