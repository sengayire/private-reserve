import { user as initialState } from '../../store/initialState';
import signupReducer from './signupReducer';
import loginReducer from './loginReducer';
import logoutReducer from './logoutReducer';
import forgotPasswordReducer from './forgotPasswordReducer';
import updatePasswordReducer from './updatePasswordReducer';
import userProfileReducer from './userProfileReducer';

export default (state = initialState, action) => ({
  ...state,
  ...userProfileReducer(state, action),
  ...logoutReducer(state, action),
  ...signupReducer(state, action),
  ...loginReducer(state, action),
  ...forgotPasswordReducer(state, action),
});
