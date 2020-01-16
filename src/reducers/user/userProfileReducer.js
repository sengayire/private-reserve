import { userActionsTypes } from '../../actions-types';

export default (state, { type, payload }) => {
  console.log('reducer', payload)
  switch (type) {
    case userActionsTypes.CREATE_PROFILE_START:
      return {
        ...state,
        adProfile: { message: '', loading: true, errors: {} }
      };
    case userActionsTypes.CREATE_PROFILE_END:
      return {
        ...state,
        adProfile: { ...state.adProfile, loading: false }
      };
    case userActionsTypes.CREATE_PROFILE_SUCCESS:
      return {
        ...state,
        adProfile: {loading: false, message: payload.message, errors: {} }
      };
    case userActionsTypes.CREATE_PROFILE_FAILURE:
      return {
        ...state,
        adProfile: { loading: false, message: '', errors: { ...payload.errors } }
      };
    default:
      return state;
  }
};
