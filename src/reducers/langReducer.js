/**
 * Actions types
 */
import { UPDATE_LANG } from '../actions/types';

export default (state = 'fr', action) => {
  switch (action.type) {
    case UPDATE_LANG:
      return action.payload;
    default:
      return state;
  }
};
