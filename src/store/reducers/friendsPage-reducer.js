const UPDATE_NEW_FRIENDS_NAME = 'UPDATE_NEW_FRIENDS_NAME';
const ADD_FRIEND = 'ADD_FRIEND';

const initialState = {
    friends: [
        {
            id: 1,
            name: 'Альберт',
            img: 'https://practicalpie.com/wp-content/uploads/2020/04/03-Albert-Bandura.jpg',
        },
        {
            id: 2,
            name: 'Альфред',
            img: 'https://practicalpie.com/wp-content/uploads/2021/03/Alfred-Adler-768x499.jpg',
        },
        {
            id: 3,
            name: 'Абрахам',
            img: 'https://practicalpie.com/wp-content/uploads/2020/05/Abraham-Maslow-768x499.jpg',
        },
    ],
    newFriendName: '',
};

export const friendsPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_FRIENDS_NAME:
            // state.newFriendName = action.newName;
            // return state;
            return { ...state, newFriendName: action.newName };
        case ADD_FRIEND:
            const newFriend = {
                id: Math.random(),
                name: state.newFriendName,
                img: 'https://sun9-45.userapi.com/sun9-83/impg/STFNc3YmLhPBKpAeuQTuG1cBXisgOoAL-lLbHw/U1bk80ll7yQ.jpg?size=604x528&quality=96&sign=d48c6a090f22ada85adc0821acf2946c&type=album',
            };
            // state.friends.push(newFriend);
            // state.newFriendName = '';
            // return state;
            return {
                ...state,
                friends: [...state.friends, newFriend],
                newFriendName: '',
            };
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
