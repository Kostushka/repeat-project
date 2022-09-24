import { useFormik } from 'formik';
// import { useRef } from 'react';
import UserName from './UserName';
import Message from './Message';

import styles from './Dialogs.module.css';

const Dialogs = ({
    dialogs,
    newDialogText,
    updateMessageTextActionCreator,
    addMessageActionCreator,
    // auth,
}) => {
    // const ref = useRef();
    const formik = useFormik({
        initialValues: {
            message: '',
        },
        onSubmit: (values, { resetForm }) => {
            addMessageActionCreator(values);
            resetForm({ values: '' });
        },
    });

    // if (!auth) {
    //     return <Redirect to='/login' />;
    //     // window.location.replace('/login');
    // }

    // const addNewMessage = () => {
    //     addMessageActionCreator();
    // };
    // const onMessageChange = () => {
    //     const value = ref.current.value;
    //     updateMessageTextActionCreator(value);
    // };
    return (
        <div className={styles.wrapper}>
            <h1>Диалоги</h1>
            <div>
                {dialogs.map((el, i) => (
                    <div className={styles.container} key={i}>
                        <UserName name={el.name} id={el.id} img={el.img} />
                        <Message message={el.message} />
                    </div>
                ))}
            </div>
            <form onSubmit={formik.handleSubmit}>
                <textarea
                    placeholder='Введите текст'
                    name='message'
                    // ref={ref}
                    // value={newDialogText}
                    // onChange={onMessageChange}
                    value={formik.values.message}
                    onChange={formik.handleChange}
                />
                <div>
                    <button>Добавить сообщение</button>
                </div>
            </form>
        </div>
    );
};

export default Dialogs;
