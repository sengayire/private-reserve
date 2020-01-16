const checkUser = require('../../helpers/checkUser')();

module.exports = {
  profile: checkUser.profile,
  token: localStorage.token,
  isAuth: checkUser.isAuth,
  listOfUsers: [],
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
  },
  editProfile: {
    loading: false,
    message: '',
    errors: {}
  },
  uploadImage: {
    loading: false,
    image: {},
    errors: {}
  },
  forgotPassword: {
    loading: false,
    message: '',
    errors: {}
  },
  updatePassword: {
    loading: false,
    message: '',
    errors: {}
  },
  adProfile: {
    loading: false,
    message: '',
    errors: {}
  },
};

