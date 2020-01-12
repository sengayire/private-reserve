import initialState  from '../../store/initialState';
import signupReducer from './signupReducer';
import loginReducer from './loginReducer';
import logoutReducer from './logoutReducer';
import clearUserStoreReducer from './clearUserStoreReducer';
export default (state = initialState, action) => {
  const clearUserStore = clearUserStoreReducer(state, action);
  const logout = logoutReducer(state, action);
  const signup = signupReducer(state, action);
  const login = loginReducer(state, action);

  return (
    clearUserStore || login || signup || logout
  );
};
