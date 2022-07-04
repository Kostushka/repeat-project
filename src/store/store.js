import { createStore, combineReducers, applyMiddleware } from 'redux';
import { mainPageReducer } from './reducers/mainPage-reducer';
import { dialogsPageReducer } from './reducers/dialogsPage-reducer';
import { friendsPageReducer } from './reducers/friendsPage-reducer';
import { usersReducer } from './reducers/usersPage-reducer';
import authReducer from './reducers/auth-reducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    mainPage: mainPageReducer,
    dialogsPage: dialogsPageReducer,
    friendsPage: friendsPageReducer,
    usersPage: usersReducer,
    auth: authReducer,
});
export const store = createStore(rootReducer, applyMiddleware(thunk));
