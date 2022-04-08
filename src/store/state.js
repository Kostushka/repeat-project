import { rerenderEntireTree } from '..';

export const state = {
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
};

export const addPost = () => {
    const newPost = {
        id: Math.random(),
        message: state.mainPage.newPostText,
    };
    state.mainPage.posts.push(newPost);
    state.mainPage.newPostText = '';
    rerenderEntireTree();
};

export const updatePostText = (postText) => {
    state.mainPage.newPostText = postText;
    rerenderEntireTree();
};

export const addMessage = () => {
    const newDialogs = {
        id: Math.random(),
        name: 'Неизвестный пользователь',
        message: state.dialogsPage.newDialogText,
        img: 'https://sun9-45.userapi.com/sun9-83/impg/STFNc3YmLhPBKpAeuQTuG1cBXisgOoAL-lLbHw/U1bk80ll7yQ.jpg?size=604x528&quality=96&sign=d48c6a090f22ada85adc0821acf2946c&type=album',
    };
    state.dialogsPage.dialogs.push(newDialogs);
    state.dialogsPage.newDialogText = '';
    rerenderEntireTree();
};

export const updateMessageText = (messageText) => {
    state.dialogsPage.newDialogText = messageText;
    rerenderEntireTree();
};

window.state = state;
