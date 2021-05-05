import {combineReducers} from 'redux';

import appReducer from './app/redux';
import authReducer from './auth/redux';
import searchReducer from './search/redux'

const reducers = combineReducers({
    app: appReducer,
    auth: authReducer,
    search: searchReducer
});

export default reducers;