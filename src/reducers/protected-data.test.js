import JabberReducer from './protected-data';
import {
    fetchProtectedDataSuccess,
    fetchProtectedDataError
} from '../actions/protected-data';

describe('reducer', () => {
    // Set up some dummy data
    const data = 'data 1 test';
    const error1 = 'error 1 test';

    it('Should set the initial state when nothing is passed in', () => {
        const state = JabberReducer(undefined, { type: '__UNKNOWN' });
        expect(state).toEqual({
            data: '',
            error: null
        });
    });

    it('Should return the current state on an unknown action', () => {
        let currentState = {};
        const state = JabberReducer(currentState, { type: '__UNKNOWN' });
        expect(state).toBe(currentState);
    });

    describe('fetchProtectedDataSuccess', () => {
        it('Should fetch data', () => {
            let state;
            state = JabberReducer(state, fetchProtectedDataSuccess(data));
            expect(state).toEqual({
                data: data,
                error: null
            });
        });
    });
    describe('fetchProtectedDataError', () => {
        it('Should fetch an error', () => {
            let state;
            state = JabberReducer(state, fetchProtectedDataError(error1));
            expect(state).toEqual({
                data: '',
                error: error1
            });
        });
    });
});
