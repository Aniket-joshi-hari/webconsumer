/*
 *
 * Partner actions
 *
 */

import { USER_NAME } from './constants';
import { USER_CITY } from './constants';
import { USER_NUMBER } from './constants';




export function Change_Username() {
  return {
    
    type: USER_NAME,
    name,
  };
}

export function Change_Cityname() {
  return {
    
    type: USER_CITY,
    city,
  };
}

export function Change_Number() {
  return {
    
    type: USER_NUMBER,
    number,
  };
}
