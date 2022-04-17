import {
    addMessageActionCreator,
    updateMessageTextActionCreator,
} from '../../store/reducers/dialogsPage-reducer';
import Dialogs from './Dialogs';

const DialogsContainer = ({ dialogs, newDialogText, dispatch }) => {
    const onChangeMessage = (value) => {
        dispatch(updateMessageTextActionCreator(value));
    };
    const onClickChangeMessage = () => {
        dispatch(addMessageActionCreator());
    };
    return (
        <>
            <Dialogs
                dialogs={dialogs}
                newDialogText={newDialogText}
                onChangeMessage={onChangeMessage}
                onClickChangeMessage={onClickChangeMessage}
            />
        </>
    );
};

export default DialogsContainer;
