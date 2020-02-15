import { postAd as initialState } from '../../store/initialState';
import postAdDetailsReducer from './postAdDetailsReducer';
import profileInfoReducer from './profileInfoReducer';

export default (state = initialState, action) => ({
  ...state,
  ...postAdDetailsReducer(state, action),
  ...profileInfoReducer(state, action),
});
