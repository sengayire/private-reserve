import checkUser from '../../helpers/checkUser'

 const user = {
  profile: checkUser.profile,
  token: localStorage.token,
  isAuth: checkUser.isAuth,
  currentUser: {},
  signup: {
    loading: false,
    message: '',
    errors: {}
  },
  login: {
    loading: false,
    message: '',
    errors: {}
  },
  logout: {
    loading: false,
    message: '',
    errors: {}
  }
};

export default user;