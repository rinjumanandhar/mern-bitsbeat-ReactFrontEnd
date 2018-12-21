import config from 'config';
import { authHeader } from '../helpers'

export const userService = {
    register,
    getAll,
    getById
};

function getAll() {
    const requestOptions = {
        methos: 'GET',
        headers: authHeader()
    };

    return fetch(`${config.apiUrl}/users`, requestOptions).then(handleResponse);
}

function getById(id) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${config.apiUrl}/users/${id}`, requestOptions).then(handleResponse);
}

function register(user){
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type ': 'application/json'},
        body: JSON.stringify(user)
    };

    return fetch(`${config.apiUrl}/users/register`, requestOptions).then(handleResponse);
}
