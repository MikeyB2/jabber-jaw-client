export const loadAuthToken = () => {
    return localStorage.getItem('authToken', 'username');
};

export const saveAuthToken = authToken => {
    try {
        localStorage.setItem('authToken', authToken);
    } catch (e) { }
};

export const clearAuthToken = () => {
    try {
        localStorage.removeItem('authToken');
    } catch (e) { }
};

export const saveUsername = username => {
    try {
        localStorage.setItem('username', username);
    } catch (e) { }
};

export const clearUsername = () => {
    try {
        localStorage.removeItem('username');
    } catch (e) { }
};