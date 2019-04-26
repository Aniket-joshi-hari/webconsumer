/*
 *
 * Partner reducer
 *
 */

import { fromJS } from 'immutable';
import { USER_NAME } from './constants';
import { USER_CITY } from './constants';
import { USER_NUMBER } from './constants';
export const initialState = fromJS({

name: '',
city: '',
number: ''

});

function partnerReducer(state = initialState, action) {
  switch (action.type) {
    case USER_NAME:
      return  state.set('name', action.name);

    case USER_CITY:
      return state.set('city', action.city);

    case USER_NUMBER:
      return state.set('number', action.number);

    default:
      return state;
  }
}

export default partnerReducer;
