import React, { Component } from 'react';

const urlForData = login => `https://api.github.com/users/${login}`

class Main extends Component {
    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {
        fetch(urlForData(this.props.login))
            .then(d => d.json())
            .then(d => {
                    this.setState({
                        users: d
                    });
                }
            );
    }

    render() {
        if(!this.state.users) return <p>Loading.......</p>
        return (
            <div>
                <h2>{this.state.users.html_url}</h2>
            </div>
        );
    }
}

export default Main;


