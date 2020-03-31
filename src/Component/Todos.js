import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Todos extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const listItem = this.props.list.map((item) => (
            <div>
                <input type='checkbox' onChange />
                <li key={item.id}>{item.title}</li>

            </div>
        ));
        return (
            <ul>{listItem}</ul>
        );
    }
}

Todos.propTypes = {
    list: PropTypes.array.isRequired
}
export default Todos;