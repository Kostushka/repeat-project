import { NavLink } from 'react-router-dom';
import styles from './UserName.module.css';

const UserName = ({ name, id, img }) => {
    return (
        <>
            <NavLink to={`/dialogs/${id}`}>
                <div>
                    <img className={styles.img} src={img} alt='ava' />
                </div>
                {name}
            </NavLink>
        </>
    );
};

export default UserName;
