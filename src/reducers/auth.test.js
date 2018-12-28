import JabberReducer from './auth';
import {
    setAuthToken,
    clearAuth,
    authRequest,
    authSuccess,
    authError
} from '../actions/auth';

describe('reducer', () => {
    // Set up some dummy data
    const authToken1 = 'Token 1 test';
    const currentUser1 = 'User 1 test';
    const loading1 = true;
    const error1 = 'error 1 test';

    it('Should set the initial state when nothing is passed in', () => {
        const state = JabberReducer(undefined, { type: '__UNKNOWN' });
        expect(state).toEqual({
            authToken: null, // authToken !== null does not mean it has been validated
            currentUser: null,
            loading: false,
            error: null
        });
    });

    it('Should return the current state on an unknown action', () => {
        let currentState = {};
        const state = JabberReducer(currentState, { type: '__UNKNOWN' });
        expect(state).toBe(currentState);
    });

    describe('setAuthToken', () => {
        it('Should Set Token', () => {
            let state;
            state = JabberReducer(state, setAuthToken(authToken1));
            expect(state).toEqual({
                authToken: authToken1,
                currentUser: null,
                loading: false,
                error: null
            });
        });
    });
    describe('clearAuth', () => {
        it('Should Clear Token', () => {
            let state;
            state = JabberReducer(state, clearAuth(null));
            expect(state).toEqual({
                authToken: null,
                currentUser: null,
                loading: false,
                error: null
            });
        });
    });
    describe('authRequest', () => {
        it('Should Authorize Request', () => {
            let state;
            state = JabberReducer(state, authRequest(loading1));
            expect(state).toEqual({
                authToken: null,
                currentUser: null,
                loading: loading1,
                error: null
            });
        });
    });
    describe('authSuccess', () => {
        it('Should Authorize Request success', () => {
            let state;
            state = JabberReducer(state, authSuccess(currentUser1));
            expect(state).toEqual({
                authToken: null,
                currentUser: currentUser1,
                loading: false,
                error: null
            });
        });
    });
    describe('authError', () => {
        it('Should Authorize Request success', () => {
            let state;
            state = JabberReducer(state, authError(error1));
            expect(state).toEqual({
                authToken: null,
                currentUser: null,
                loading: false,
                error: error1
            });
        });
    });
});
