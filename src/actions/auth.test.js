import { SET_AUTH_TOKEN, setAuthToken, SET_USER_ID, setUserId, AUTH_SUCCESS, authSuccess, AUTH_ERROR, authError } from './auth';

describe('setAuthToken', () => {
    it('Should return the action', () => {
        const authToken = 'authToken';
        const action = setAuthToken(authToken);
        expect(action.type).toEqual(SET_AUTH_TOKEN);
        expect(action.authToken).toEqual(authToken);
    });
});

describe('setUserId', () => {
    it('Should return the action', () => {
        const username = 'username';
        const action = setUserId(username);
        expect(action.type).toEqual(SET_USER_ID);
        expect(action.username).toEqual(username);
    });
});

describe('authSuccess', () => {
    it('Should return the action', () => {
        const currentUser = 'currentUser';
        const action = authSuccess(currentUser);
        expect(action.type).toEqual(AUTH_SUCCESS);
        expect(action.currentUser).toEqual(currentUser);
    });
});

describe('authError', () => {
    it('Should return the action', () => {
        const error = 'error';
        const action = authError(error);
        expect(action.type).toEqual(AUTH_ERROR);
        expect(action.error).toEqual(error);
    });
});