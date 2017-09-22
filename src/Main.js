import React, { Component } from 'react';
// import { Link, Router, Route, IndexRoute, browserHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'

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
            <li className="col-md-6 userItem" key={todo.id}>
                <Link to={`/${todo.id}`}>
                    <div>
                        <img className="userPhoto" src={todo.avatar_url} alt={todo.login} />
                        <div className="userInformation">
                            <p><span>User login:</span> {todo.login}</p>
                            <p><span>Profile link:</span> {todo.html_url}</p>
                        </div>
                    </div>
                </Link>
            </li>
        );
        return (
            <div className="row">
                <ul className="col-md-12 list-unstyled">{todoItems}</ul>
            </div>
        );
    }
}

export default Main;


