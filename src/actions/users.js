import { SubmissionError } from 'redux-form';

import Chatkit from '@pusher/chatkit-client';
import { API_BASE_URL } from '../config';
import { normalizeResponseErrors } from './utils';

const createChatId = (user) => {
    console.log('IT WORKED!:', user, user.firstName + ' ' + user.lastName)
    localStorage.setItem('username', user.username)
    // chatkit.createUser({
    //     id: user.username,
    //     name: user.firstName + ' ' + user.lastName,
    //   })
    //     .then(() => {
    //       console.log('User created successfully');
    //     }).catch((err) => {
    //       console.log(err);
    //     });
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
