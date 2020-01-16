import { user as initialState } from '../../store/initialState';
import signupReducer from './signupReducer';
import loginReducer from './loginReducer';
import logoutReducer from './logoutReducer';
import forgotPasswordReducer from './forgotPasswordReducer';
import updatePasswordReducer from './updatePasswordReducer';
import userProfileReducer from './userProfileReducer';
export default (state = initialState, action) => {
  const userProfile = userProfileReducer(state, action);
  const logout = logoutReducer(state, action);
  const signup = signupReducer(state, action);
  const login = loginReducer(state, action);
  const forgotPassword = forgotPasswordReducer(state, action);

  return (
     login 
     || userProfile
     || signup 
     || logout 
     || forgotPassword 
     || updatePasswordReducer

  );
};
