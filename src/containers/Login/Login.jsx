import { useFormik } from 'formik';
import styles from './Login.module.css';

const Login = () => {
    const formik = useFormik({
        initialValues: {
            login: '',
            password: '',
            toggle: false,
        },
        onSubmit: (values) => {
            console.log(values);
        },
    });

    return (
        <form onSubmit={formik.handleSubmit} className={styles.block}>
            <div>
                <label htmlFor='login'>Логин</label>
                <input
                    placeholder='введите логин'
                    name='login'
                    type='text'
                    onChange={formik.handleChange}
                    value={formik.values.login}
                />
            </div>
            <div>
                <label htmlFor='password'>Пароль</label>
                <input
                    placeholder='введите пароль'
                    name='password'
                    type='password'
                    onChange={formik.handleChange}
                    value={formik.values.password}
                />
            </div>
            <div>
                <label htmlFor='toggle'>Запомнить меня</label>
                <input
                    name='toggle'
                    type='checkbox'
                    value={formik.values.toggle}
                    onChange={formik.handleChange}
                />
            </div>

            <button type='submit'>Отправить</button>
        </form>
    );
};

export default Login;
