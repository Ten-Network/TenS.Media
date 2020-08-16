import UserActionTypes from './user.types';

export const setCurrentUser = (user) => ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
});

export const register = (userCredentials) => ({
    type: UserActionTypes.REGISTER_USER,
    payload: userCredentials
});

export const logIn = (userCredentials) => ({
    type: UserActionTypes.LOG_IN_USER,
    payload: userCredentials
});

export const logOut = () => ({
    type: UserActionTypes.LOG_OUT_USER,
});