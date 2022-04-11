const ADD_POST = 'ADD_POST';
const UPDATE_POST_TEXT = 'UPDATE_POST_TEXT';
const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE_MESSAGE_TEXT';

export const store = {
    _state: {
        mainPage: {
            posts: [
                { id: 1, message: 'Hello' },
                { id: 2, message: 'Hi' },
                { id: 3, message: 'Hey' },
                { id: 4, message: 'Lala' },
            ],
            newPostText: '',
        },
        dialogsPage: {
            dialogs: [
                {
                    id: 1,
                    name: 'Банан',
                    message: 'Привет, Банан!',
                    img: 'https://practicalpie.com/wp-content/uploads/2020/04/03-Albert-Bandura.jpg',
                },
                {
                    id: 2,
                    name: 'Ананас',
                    message: 'Привет, Ананас!',
                    img: 'https://practicalpie.com/wp-content/uploads/2021/03/Alfred-Adler-768x499.jpg',
                },
                {
                    id: 3,
                    name: 'Вишня',
                    message: 'Привет, Вишня!',
                    img: 'https://practicalpie.com/wp-content/uploads/2020/05/Abraham-Maslow-768x499.jpg',
                },
                {
                    id: 4,
                    name: 'Морковь',
                    message: 'Привет, Морковь!',
                    img: 'https://practicalpie.com/wp-content/uploads/2020/04/Erik-Erikson-1024x666.jpg',
                },
                {
                    id: 5,
                    name: 'Петруха',
                    message: 'Привет, Петруха!',
                    img: 'https://practicalpie.com/wp-content/uploads/2020/07/28-Solomon-Asch-768x499.jpg',
                },
                {
                    id: 6,
                    name: 'Огуречный огурец',
                    message: 'Привет, Огурец!',
                    img: 'https://practicalpie.com/wp-content/uploads/2020/04/John-B-Watson-1024x666.jpg',
                },
            ],
            newDialogText: '',
        },
        friendsPage: {
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
        },
    },
    _callsubscriber() {},

    get getState() {
        return this._state;
    },
    set subscribe(observer) {
        this._callsubscriber = observer;
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            const newPost = {
                id: Math.random(),
                message: this._state.mainPage.newPostText,
            };
            this._state.mainPage.posts.push(newPost);
            this._state.mainPage.newPostText = '';
            this._callsubscriber();
        } else if (action.type === UPDATE_POST_TEXT) {
            this._state.mainPage.newPostText = action.postText;
            this._callsubscriber();
        } else if (action.type === ADD_MESSAGE) {
            const newDialogs = {
                id: Math.random(),
                name: 'Неизвестный пользователь',
                message: this._state.dialogsPage.newDialogText,
                img: 'https://sun9-45.userapi.com/sun9-83/impg/STFNc3YmLhPBKpAeuQTuG1cBXisgOoAL-lLbHw/U1bk80ll7yQ.jpg?size=604x528&quality=96&sign=d48c6a090f22ada85adc0821acf2946c&type=album',
            };
            this._state.dialogsPage.dialogs.push(newDialogs);
            this._state.dialogsPage.newDialogText = '';
            this._callsubscriber();
        } else if (action.type === UPDATE_MESSAGE_TEXT) {
            this._state.dialogsPage.newDialogText = action.messageText;
            this._callsubscriber();
        }
    },
};

export const addPostActionCreator = () => ({
    type: ADD_POST,
});
export const updatePostTextActionCreator = (postText) => ({
    type: UPDATE_POST_TEXT,
    postText,
});
export const addMessageActionCreator = () => ({
    type: ADD_MESSAGE,
});
export const updateMessageTextActionCreator = (messageText) => ({
    type: UPDATE_MESSAGE_TEXT,
    messageText,
});

window.store = store;
