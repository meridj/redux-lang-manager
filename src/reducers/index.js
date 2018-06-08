/**
 * Npm imports
 */
import { combineReducers } from 'redux';

/**
 * Reducers
 */
import langReducer from './langReducer';

export default combineReducers({
  lang: langReducer
});
