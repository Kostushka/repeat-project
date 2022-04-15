import { dialogsPageReducer } from './reducers/dialogsPage-reducer';
import { mainPageReducer } from './reducers/mainPage-reducer';

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
        mainPageReducer(this._state.mainPage, action);
        dialogsPageReducer(this._state.dialogsPage, action);
        this._callsubscriber();
    },
};

window.store = store;
