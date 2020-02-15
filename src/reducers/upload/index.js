import { upload as initialState } from '../../store/initialState';
import uploadReducer from './uploadReducer';

export default (state = initialState, action) => ({
  ...state,
  ...uploadReducer(state, action),
});
