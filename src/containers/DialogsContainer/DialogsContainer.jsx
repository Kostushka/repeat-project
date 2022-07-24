import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRedirect } from '../../hoc/withRedirect';
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
// const DialogsContainer = withRedirect(
//     connect(mapStateToProps, {
//         updateMessageTextActionCreator,
//         addMessageActionCreator,
//     })(Dialogs)
// );

export default compose(
    withRedirect,
    connect(mapStateToProps, {
        updateMessageTextActionCreator,
        addMessageActionCreator,
    })
)(Dialogs);
