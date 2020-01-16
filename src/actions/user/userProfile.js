
import { userActionsTypes } from '../../actions-types';
import { apiAction } from '../../helpers';

export default (payload = {}) => (dispatch) => dispatch(apiAction({
  method: 'post',
  url: '/profile',
  data: { ...payload },
  onStart: userActionsTypes.CREATE_PROFILE_START,
  onEnd: userActionsTypes.CREATE_PROFILE_END,
  onSuccess: userActionsTypes.CREATE_PROFILE_SUCCESS,
  onFailure: userActionsTypes.CREATE_PROFILE_FAILURE
}));
