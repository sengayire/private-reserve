import { userActionsTypes } from '../../actions-types';

export default (state, { type, payload }) => {
  switch (type) {
    case userActionsTypes.UPLOAD_START:
      return {
        ...state,
        upload: { message: '', loading: true, errors: {} },
      };
    case userActionsTypes.UPLOAD_END:
      return { ...state };
    case userActionsTypes.UPLOAD_SUCCESS:
      return {
        ...state,
        upload: { loading: false, message: payload.message, errors: {} },
      };
    case userActionsTypes.UPLOAD_FAILURE:
      return {
        ...state,
        upload: { loading: false, message: '', errors: { ...payload } },
      };
    default:
      return null;
  }
};
