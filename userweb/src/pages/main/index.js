import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import './styles.css';

export default class Main extends Component {
    state = {
        users: []
    };

    componentDidMount() {
        this.loadUsers();
    }

    loadUsers = async () => {
        const response = await api.get('/users');

        this.setState({
            users: response.data
        })
    }

    prevPage = () => {

    }

    nextPage = () => {

    }

    render() {
        const { users } = this.state;

        return (
            <div className="user-list">
                <h1>Usuários cadastrados ({users.length})</h1>
                <br></br>

                {users.map(user => (
                    <article key={user.id}>
                        <strong>{user.name}</strong> | <i>{user.username}</i><br></br>
                        <p>{user.email}</p>
                        <Link to={`/user/${user.id}`} title="Detalhar usuário">DETALHES</Link>
                    </article>
                ))}

                <div className="actions">
                    <button onClick={this.prevPage}>
                        Anterior
                    </button>
                    <button onClick={this.nextPage}>
                        Próxima
                    </button>
                </div>
            </div>
        );
    }
}
