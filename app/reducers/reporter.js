import { handleActions } from 'redux-actions';
import actionTypes from 'constants/reporter';
import sessionStorage from 'services/sessionStorage';

const { SEND_CODE, GET_REPORT } = actionTypes;

const initialState = {
  isLoading: false,
  report: '',
  success: false
};

export default handleActions(
  {
    [SEND_CODE]: state => ({
      ...state,
      isLoading: true
    }),
    [GET_REPORT]: (state, { payload }) => ({
      isLoading: false,
      result: payload.result,
      success: payload.success,
      isRequested: true
    })
  },
  initialState
);
