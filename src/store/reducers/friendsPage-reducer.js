const UPDATE_NEW_FRIENDS_NAME = 'UPDATE_NEW_FRIENDS_NAME';
const ADD_FRIEND = 'ADD_FRIEND';

export const friendsPageReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_NEW_FRIENDS_NAME:
            state.newFriendName = action.newName;
            return state;
        case ADD_FRIEND:
            const newFriend = {
                id: Math.random(),
                name: state.newFriendName,
                img: 'https://sun9-45.userapi.com/sun9-83/impg/STFNc3YmLhPBKpAeuQTuG1cBXisgOoAL-lLbHw/U1bk80ll7yQ.jpg?size=604x528&quality=96&sign=d48c6a090f22ada85adc0821acf2946c&type=album',
            };
            state.friends.push(newFriend);
            state.newFriendName = '';
            return state;
        default:
            return state;
    }
};

export const updateNewFriendsNameActionCreator = (newName) => ({
    type: UPDATE_NEW_FRIENDS_NAME,
    newName,
});
export const addFriendActionCreator = () => ({
    type: ADD_FRIEND,
});
