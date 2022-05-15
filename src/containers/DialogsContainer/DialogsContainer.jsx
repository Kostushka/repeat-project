import { connect } from 'react-redux';
import {
    addMessageActionCreator,
    updateMessageTextActionCreator,
} from '../../store/reducers/dialogsPage-reducer';
import Dialogs from './Dialogs';

const mapStateToProps = (state) => ({
    dialogs: state.dialogsPage.dialogs,
    newDialogText: state.dialogsPage.newDialogText,
});
// const mapDispatchToProps = (dispatch) => ({
//     onChangeMessage(value) {
//         dispatch(updateMessageTextActionCreator(value));
//     },
//     onClickChangeMessage() {
//         dispatch(addMessageActionCreator());
//     },
// });
const DialogsContainer = connect(mapStateToProps, {
    updateMessageTextActionCreator,
    addMessageActionCreator,
})(Dialogs);

export default DialogsContainer;
