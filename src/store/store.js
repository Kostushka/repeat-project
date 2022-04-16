import { createStore, combineReducers } from 'redux';
import { mainPageReducer } from './reducers/mainPage-reducer';
import { dialogsPageReducer } from './reducers/dialogsPage-reducer';
import { friendsPageReducer } from './reducers/friendsPage-reducer';

const rootReducer = combineReducers({
    mainPage: mainPageReducer,
    dialogsPage: dialogsPageReducer,
    friendsPage: friendsPageReducer,
});
export const store = createStore(rootReducer);
