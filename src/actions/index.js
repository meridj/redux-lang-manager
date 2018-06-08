/**
 * Actions Types
 */
import { UPDATE_LANG } from './types';

export const updateLang = newLang => {
  return {
    type: UPDATE_LANG,
    payload: newLang
  };
};
