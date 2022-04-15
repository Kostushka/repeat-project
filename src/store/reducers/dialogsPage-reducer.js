export const ADD_MESSAGE = 'ADD_MESSAGE';
export const UPDATE_MESSAGE_TEXT = 'UPDATE_MESSAGE_TEXT';

export const dialogsPageReducer = (state, action) => {
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
