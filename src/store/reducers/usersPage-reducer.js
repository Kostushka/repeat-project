const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const GET_USERS = 'GET_USERS';

const initialState = {
    users: [],
};

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((el) => {
                    if (el.id === action.userId) {
                        return { ...el, followed: true };
                    }
                    return el;
                }),
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((el) => {
                    if (el.id === action.userId) {
                        return { ...el, followed: false };
                    }
                    return el;
                }),
            };
        case GET_USERS:
            return { ...state, users: [...action.users] };

        default:
            return state;
    }
};

export const followActionCreator = (userId) => ({
    type: FOLLOW,
    userId,
});
export const unfollowActionCreator = (userId) => ({
    type: UNFOLLOW,
    userId,
});
export const getUsersActionCreator = (users) => ({
    type: GET_USERS,
    users,
});
