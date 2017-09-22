import React, { Component } from 'react';

const allUser = 'https://api.github.com/users';

class Main extends Component {
    constructor() {
        super();
        this.state = {users: []};
    }

    componentDidMount() {
        fetch(allUser)
            .then(d => d.json())
            .then(d => {
                    this.setState({
                        users: d
                    });
                }
            );
    }

    render() {
        const todoItems = this.state.users.map((todo) =>
            <li key={todo.id}>
                {todo.login}
            </li>
        );
        return (
            <div>
                {todoItems}
            </div>
        );
    }
}

export default Main;


