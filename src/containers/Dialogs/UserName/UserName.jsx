import { NavLink } from 'react-router-dom';

const UserName = ({ name, id }) => {
    return (
        <>
            <NavLink to={`/dialogs/${id}`}>{name}</NavLink>
        </>
    );
};

export default UserName;
