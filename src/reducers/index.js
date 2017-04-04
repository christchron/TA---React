import { combineReducers } from 'redux';
import analyticsData from './reducer_posts';
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
  analyticsData
});

export default rootReducer;
