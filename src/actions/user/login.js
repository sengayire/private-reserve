
import { userActionsTypes } from '../../actions-types';
import { apiAction } from '../../helpers';

export default (payload = {}) => (dispatch) => dispatch(apiAction({
  method: 'post',
  url: 'http://localhost:3000/api/v1/auth/login',
  data: { ...payload },
  onStart: userActionsTypes.LOGIN_USER_START,
  onEnd: userActionsTypes.LOGIN_USER_END,
  onSuccess: userActionsTypes.LOGIN_USER_SUCCESS,
  onFailure: userActionsTypes.LOGIN_USER_FAILURE
}));
