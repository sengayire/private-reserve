import { userActionsTypes } from '../../actions-types';

export default (state, { type, payload }) => {
  switch (type) {
    case userActionsTypes.CREATE_PROFILE_START:
      return {
        ...state,
        details: { message: '', loading: true, errors: {} },
      };
    case userActionsTypes.CREATE_PROFILE_END:
      return { ...state };
    case userActionsTypes.CREATE_PROFILE_SUCCESS:
      return {
        ...state,
        details: {
          ...state.details,
          loading: false,
          message: payload.message,
          profileInfo: payload.info,
          errors: {},
        },
      };
    case userActionsTypes.CREATE_PROFILE_FAILURE:
      return {
        ...state,
        details: { loading: false, message: '', errors: { ...payload } },
      };
    default:
      return null;
  }
};
