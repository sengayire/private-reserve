import { userActionsTypes } from '../../actions-types';
import { apiAction } from '../../helpers';

export default (payload = {}) => dispatch => {
  const bodyFormData = new FormData();
  bodyFormData.append('image', payload);
  dispatch(
    apiAction({
      method: 'post',
      url: '/profile/upload',
      data: bodyFormData,
      httpOptions: { headers: { 'content-type': 'multipart/form-data' } },
      onStart: userActionsTypes.UPLOAD_START,
      onEnd: userActionsTypes.UPLOAD_END,
      onSuccess: userActionsTypes.UPLOAD_SUCCESS,
      onFailure: userActionsTypes.UPLOAD_FAILURE,
    }),
  );
};
