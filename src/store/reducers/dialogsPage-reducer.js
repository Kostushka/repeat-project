export const ADD_MESSAGE = 'ADD_MESSAGE';
export const UPDATE_MESSAGE_TEXT = 'UPDATE_MESSAGE_TEXT';

const initialState = {
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
};

export const dialogsPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            const newDialogs = {
                id: Math.random(),
                name: 'Неизвестный пользователь',
                message: state.newDialogText,
                img: 'https://sun9-45.userapi.com/sun9-83/impg/STFNc3YmLhPBKpAeuQTuG1cBXisgOoAL-lLbHw/U1bk80ll7yQ.jpg?size=604x528&quality=96&sign=d48c6a090f22ada85adc0821acf2946c&type=album',
            };
            state.dialogs.push(newDialogs);
            state.newDialogText = '';
            return state;
        case UPDATE_MESSAGE_TEXT:
            state.newDialogText = action.messageText;
            return state;
        default:
            return state;
    }
};

export const addMessageActionCreator = () => ({
    type: ADD_MESSAGE,
});
export const updateMessageTextActionCreator = (messageText) => ({
    type: UPDATE_MESSAGE_TEXT,
    messageText,
});
