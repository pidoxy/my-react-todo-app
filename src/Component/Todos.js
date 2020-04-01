import React, { Component } from 'react';
import PropTypes from 'prop-types';    // I'm not exactly sure what function PropTypes serves



class Todos extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const listItem = this.props.list.map((item) => (
            <div className='todolist'>
                <input type='checkbox' onChange /><li className='todo' key={item.id}>{item.title}</li>
                

            </div>
        ));
        return (
            <ul>{listItem}</ul>
        );
    }
}

Todos.propTypes = {                                // I need clarificaton on this
    list: PropTypes.array.isRequired
}

export default Todos;