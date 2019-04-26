import { fromJS } from 'immutable';
import partnerReducer from '../reducer';

describe('partnerReducer', () => {
  it('returns the initial state', () => {
    expect(partnerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
