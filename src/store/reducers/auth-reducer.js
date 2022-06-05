const SET_USER_AUTH = 'SET_USER_AUTH';

let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_AUTH:
            return { ...state, ...action.payload, isAuth: true };

        default:
            return state;
    }
};

export const setUserAuthActionCreator = (payload) => ({
    type: SET_USER_AUTH,
    payload,
});

export default authReducer;
