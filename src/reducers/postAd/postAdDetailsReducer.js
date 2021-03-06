import { userActionsTypes } from '../../actions-types';

export default (state, { type, payload }) => {
  switch (type) {
    case userActionsTypes.CREATE_POST_START:
      return {
        ...state,
        details: { message: '', loading: true, errors: {} },
      };
    case userActionsTypes.CREATE_POST_END:
      return { ...state };
    case userActionsTypes.CREATE_POST_SUCCESS:
      return {
        ...state,
        details: {
          ...state.details,
          loading: false,
          message: payload.message,
          profile: payload.profile,
          errors: {},
        },
      };
    case userActionsTypes.CREATE_POST_FAILURE:
      return {
        ...state,
        details: { loading: false, message: '', errors: { ...payload } },
      };
    default:
      return null;
  }
};
