import React, { Component } from 'react';

const userLinkPage = id => `https://api.github.com/users/${id}`;

class userPage extends Component {
    constructor() {
        super();
        this.state = {
            users: []
        };
    }
    componentDidMount() {
        console.log(userLinkPage(this.props.match.params.userId))
        fetch(userLinkPage(this.props.match.params.userId))
            .then(d => d.json())
            .then(d => {
                    this.setState({
                        users: d
                    });
                }
            );
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-12 well userItem mainInfo">
                    <img className="userPhoto" src={this.state.users.avatar_url} alt={this.state.users.login} />
                    <div className="userInformation">
                        <p><span>User name:</span> {this.state.users.name}</p>
                        <p><span>Followers:</span> {this.state.users.followers}</p>
                        <p><span>Following:</span> {this.state.users.followers}</p>
                        <p><span>User create date:</span> {this.state.users.created_at}</p>
                        <p><span>User company:</span> {this.state.users.company}</p>
                        <p><span>User email:</span> {this.state.users.email}</p>
                        <p><span>User blog:</span> {this.state.users.blog}</p>
                        <p><span>User bio:</span> {this.state.users.bio}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default userPage;