export const ADD_POST = 'ADD_POST';
export const UPDATE_POST_TEXT = 'UPDATE_POST_TEXT';

export const mainPageReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: Math.random(),
                message: state.newPostText,
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_POST_TEXT:
            state.newPostText = action.postText;
            return state;
        default:
            return state;
    }
};

export const addPostActionCreator = () => ({
    type: ADD_POST,
});
export const updatePostTextActionCreator = (postText) => ({
    type: UPDATE_POST_TEXT,
    postText,
});
