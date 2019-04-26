import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the partner state domain
 */

const selectPartnerDomain = state => state.get('partner', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by Partner
 */

const makeSelectPartner = () =>
  createSelector(selectPartnerDomain, substate => substate.get('name','city','number'));

export default makeSelectPartner;
export { selectPartnerDomain };
