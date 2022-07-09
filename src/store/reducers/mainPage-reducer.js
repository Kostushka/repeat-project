import { usersApi } from '../../api/usersAPi';

export const ADD_POST = 'ADD_POST';
export const UPDATE_POST_TEXT = 'UPDATE_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

const initialState = {
    profile: null,
    posts: [
        { id: 1, message: 'Hello' },
        { id: 2, message: 'Hi' },
        { id: 3, message: 'Hey' },
        { id: 4, message: 'Lala' },
    ],
    newPostText: '',
};

export const mainPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_PROFILE:
            return { ...state, profile: action.profile };

        case ADD_POST:
            const newPost = {
                id: Math.random(),
                message: state.newPostText,
            };
            // state.posts.push(newPost);
            // state.newPostText = '';
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: '',
            };
        case UPDATE_POST_TEXT:
            // state.newPostText = action.postText;
            return { ...state, newPostText: action.postText };
        default:
            return state;
    }
};

export const setUserProfileActionCreator = (profile) => ({
    type: SET_USER_PROFILE,
    profile,
});

export const addPostActionCreator = () => ({
    type: ADD_POST,
});
export const updatePostTextActionCreator = (postText) => ({
    type: UPDATE_POST_TEXT,
    postText,
});

export const getUserProfileThunkCreator = (id) => (dispatch) => {
    usersApi
        .getUserProfile(id)
        .then((data) => dispatch(setUserProfileActionCreator(data)));
};
