import {
    addMessageActionCreator,
    updateMessageTextActionCreator,
} from '../../store/reducers/dialogsPage-reducer';
import { StoreContext } from '../../storeContext';
import Dialogs from './Dialogs';

const DialogsContainer = () => {
    return (
        <>
            <StoreContext.Consumer>
                {(store) => {
                    const onChangeMessage = (value) => {
                        store.dispatch(updateMessageTextActionCreator(value));
                    };
                    const onClickChangeMessage = () => {
                        store.dispatch(addMessageActionCreator());
                    };
                    return (
                        <Dialogs
                            dialogs={store.getState().dialogsPage.dialogs}
                            newDialogText={
                                store.getState().dialogsPage.newDialogText
                            }
                            onChangeMessage={onChangeMessage}
                            onClickChangeMessage={onClickChangeMessage}
                        />
                    );
                }}
            </StoreContext.Consumer>
        </>
    );
};

export default DialogsContainer;
