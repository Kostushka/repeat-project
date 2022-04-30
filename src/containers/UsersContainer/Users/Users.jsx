import axios from 'axios';
import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import {
//     followActionCreator,
//     unfollowActionCreator,
// } from '../../store/reducers/usersPage-reducer';
import styles from './Users.module.css';

const Users = ({ users, follow, unfollow, getUsers }) => {
    // const { users } = useSelector((state) => state.usersPage);
    // const dispatch = useDispatch();
    // const handleButton = (id, followed) => {
    //     if (followed) {
    //         dispatch(unfollowActionCreator(id));
    //     } else {
    //         dispatch(followActionCreator(id));
    //     }
    // };
    console.log(users);
    if (users.length === 0) {
        // axios
        //     .get('https://social-network.samuraijs.com/api/1.0/users')
        //     .then((data) => getUsers(data.data.items));
        // getUsers([
        //     {
        //         id: 1,
        //         name: 'Зигмунд',
        //         followed: true,
        //         photoUrl:
        //             'https://abrakadabra.fun/uploads/posts/2022-03/1647337970_2-abrakadabra-fun-p-freid-art-5.jpg',
        //         status: 'admin',
        //         location: { country: 'Германия', city: 'Берлин' },
        //     },
        //     {
        //         id: 2,
        //         name: 'Зигмундур',
        //         followed: true,
        //         photoUrl:
        //             'https://abrakadabra.fun/uploads/posts/2022-03/1647337970_2-abrakadabra-fun-p-freid-art-5.jpg',
        //         status: 'admin',
        //         location: { country: 'Германия', city: 'Берлин' },
        //     },
        //     {
        //         id: 3,
        //         name: 'Зигмундынь',
        //         followed: false,
        //         photoUrl:
        //             'https://abrakadabra.fun/uploads/posts/2022-03/1647337970_2-abrakadabra-fun-p-freid-art-5.jpg',
        //         status: 'admin',
        //         location: { country: 'Германия', city: 'Берлин' },
        //     },
        //     {
        //         id: 4,
        //         name: 'Зигмундлань',
        //         followed: false,
        //         photoUrl:
        //             'https://abrakadabra.fun/uploads/posts/2022-03/1647337970_2-abrakadabra-fun-p-freid-art-5.jpg',
        //         status: 'admin',
        //         location: { country: 'Германия', city: 'Берлин' },
        //     },
        // ]);
    }
    useEffect(() => {
        axios
            .get('https://social-network.samuraijs.com/api/1.0/users')
            .then((data) => getUsers(data.data.items));
    }, []);

    return (
        <>
            {users.map((el) => (
                <div key={el.id}>
                    <img
                        className={styles.img}
                        src={
                            el.photos.small ||
                            'https://abrakadabra.fun/uploads/posts/2022-03/1647337970_2-abrakadabra-fun-p-freid-art-5.jpg'
                        }
                        alt={el.name}
                    />
                    <div>{el.name}</div>
                    {/* <div>{el.location.country}</div> */}
                    {/* <div>{el.location.city}</div> */}
                    {/* <button
                        onClick={() => {
                            handleButton(el.id, el.followed);
                        }}
                    >
                        {el.followed ? 'Отписаться' : 'Подписаться'}
                    </button> */}

                    {el.followed ? (
                        <button onClick={() => unfollow(el.id)}>
                            Отписаться
                        </button>
                    ) : (
                        <button onClick={() => follow(el.id)}>
                            Подписаться
                        </button>
                    )}
                </div>
            ))}
        </>
    );
};

export default Users;
