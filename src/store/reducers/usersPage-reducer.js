const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const GET_USERS = 'GET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const GET_USERS_TOTAL_COUNT = 'GET_USERS_TOTAL_COUNT';
const TOGGLE_IS_LOADING = 'TOGGLE_IS_LOADING';

const initialState = {
    users: [],
    isLoading: false,
    usersTotalCount: 0,
    usersCount: 100,
    currentPage: 1,
};

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_IS_LOADING:
            return { ...state, isLoading: action.isLoading };

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

        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.page };

        case GET_USERS_TOTAL_COUNT:
            return { ...state, usersTotalCount: action.usersTotalCount };

        default:
            return state;
    }
};

export const toggleIsLoadingActionCreator = (isLoading) => ({
    type: TOGGLE_IS_LOADING,
    isLoading,
});

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

export const setCurrentPageActionCreator = (page) => ({
    type: SET_CURRENT_PAGE,
    page,
});

export const getUsersTotalCountActionCreator = (usersTotalCount) => ({
    type: GET_USERS_TOTAL_COUNT,
    usersTotalCount,
});
