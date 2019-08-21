import React, { useState } from 'react';

import './Login.css';

import api from './../services/api';
import logo from './../assets/logo.svg';

export default function Login({ history }) {
    const [username, setUsername] = useState('');
    const [searchID, setSearchID] = useState(null);

    async function handleSubmit(e) {
        e.preventDefault();

        setSearchID(username);

        try {
            const response = await api.post('/devs', {
                username
            });

            const {
                _id
            } = response.data;

            history.push(`/dev/${_id}`);
        } catch (error) {
            setSearchID(null);
            return;
        }
    }

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <img src={logo} alt="Tindev" />
                <input 
                    placeholder="Digite seu usuário do GitHub"
                    value = {username}
                    onChange = {e => setUsername(e.target.value)}
                />
                <button type="submit">
                    {
                        searchID ? (
                            <div className="loading-container">
                                <div className="lds-flickr">
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>   
                            </div>
                        ) : (
                            <p>Enviar</p>
                        )
                    }
                </button>
            </form>
        </div>
    );
}