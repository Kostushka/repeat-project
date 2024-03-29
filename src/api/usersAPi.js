import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'f438c343-2e0e-4d82-939d-054e331035e4',
    },
});

export const usersApi = {
    getUsers(currentPage, usersCount) {
        return instance
            .get(`users?page=${currentPage}&count=${usersCount}`)
            .then((res) => res.data);
    },
    postFollow(id) {
        return instance.post(`follow/${id}`).then((res) => res.data);
    },
    deleteFollow(id) {
        return instance.delete(`follow/${id}`).then((res) => res.data);
    },
    getUserProfile(id) {
        return instance.get(`profile/${id}`).then((res) => res.data);
    },
    getUserStatus(id) {
        return instance.get(`profile/status/${id}`).then((res) => res.data);
    },
    updateUserStatus(status) {
        return instance
            .put(`profile/status`, { status })
            .then((res) => res.data.data);
    },
};

export const authApi = {
    me() {
        return instance.get('auth/me').then((res) => res.data);
    },
};
