import { userActionsTypes } from '../../actions-types';
import { apiAction } from '../../helpers';

export default (payload = {}) => (dispatch) => dispatch(apiAction({
  method: 'post',
  url: '/post/details',
  data: { ...payload },
  onStart: userActionsTypes.CREATE_POST_START,
  onEnd: userActionsTypes.CREATE_POST_END,
  onSuccess: userActionsTypes.CREATE_POST_SUCCESS,
  onFailure: userActionsTypes.CREATE_POST_FAILURE
}));