import { user as initialState } from '../../store/initialState';
import signupReducer from './signupReducer';
import loginReducer from './loginReducer';
import logoutReducer from './logoutReducer';

export default (state = initialState, action) => {
    const logout = logoutReducer(state, action);
    const signup = signupReducer(state, action);
  const login = loginReducer(state, action);

  return (
      login || signup || logout
  )
}