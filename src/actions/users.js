import { SubmissionError } from 'redux-form';
import { API_BASE_URL } from '../config';
import { normalizeResponseErrors } from './utils';

const createChatId = (user) => {
    console.log('New User: ', user);
    let Name = user.firstName + ' ' + user.lastName;
    localStorage.setItem('username', user.username)
    localStorage.setItem('Name', Name)
    localStorage.setItem('Email', user.email)
    alert(`Welcome to Jabber Jaw ${user.username}!`);
}

export const registerUser = user => dispatch => {
    return fetch(`${API_BASE_URL}/users`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(user),
        success:
            createChatId(user)
    })

        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .catch(err => {
            const { reason, message, location } = err;
            if (reason === 'ValidationError') {
                // Convert ValidationErrors into SubmissionErrors for Redux Form
                return Promise.reject(
                    new SubmissionError({
                        [location]: message
                    })
                );
            }
        });
};
