import {SET_ERROR, REMOVE_ERROR, SIGN_IN, SET_USER, LOGOUT, SIGN_UP} from './constants'

const initialState = {
    isAuthenticated: false,
    user: {},
    error: null,
};

export const authReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case SIGN_IN: {
            return {
                ...state,
                isAuthenticated: true,
                user: payload
            }
        }
        case SIGN_UP: {
            return {
                ...state,
                isAuthenticated: true,
                user: payload
            }
        }
        case SET_ERROR: {
            return {
                ...state,
                error: payload
            }
        }
        case SET_USER: {
            return {
                ...state,
                isAuthenticated: true,
                user: payload
            }
        }
        case LOGOUT: {
            return {
                ...state,
                isAuthenticated: false,
                user: {},
            }
        }
        case REMOVE_ERROR: {
            return {
                ...state,
                error: null
            }
        }
        default:
            return state;
    }
};


export default authReducer;
