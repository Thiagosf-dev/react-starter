import React, { Component } from 'react';
import api from '../../services/api';

import './styles.css';

export default class User extends Component {
    state = {
        user: {}
    };

    async componentDidMount() {
        const { id } = this.props.match.params;

        const response = await api.get(`/users/${id}`);

        this.setState({
            user: response.data
        });
    }

    render() {
        const { user } = this.state;

        return (
            <div className="user-info">
                <h2>{user.name}</h2>
                <p>ID: {user.id}</p>
                <p>{user.email}</p>
                <p>{user.username}</p>
                <p>{user.phone}</p>
                <p>
                    URL: <a href="#/">{user.website}</a>
                </p>
                <p>{user.city}</p>
            </div>
        );
    }
}
