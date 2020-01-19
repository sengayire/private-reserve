import { postAdDetails as initialState } from '../../store/initialState';
import postAdDetailsReducer from './postAdDetailsReducer'

export default (state = initialState, action) => ({
  ...state,
  ...postAdDetailsReducer(state, action)
});
