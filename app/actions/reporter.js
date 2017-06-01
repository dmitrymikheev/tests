import { createActions } from 'redux-actions';
import reporterSource from 'sources/reporter';
import actionTypes from 'constants/reporter';

const { SEND_CODE, GET_REPORT } = actionTypes;

const actions = createActions(SEND_CODE, GET_REPORT);

const sendCode = (code, type) => dispatch => {
  dispatch(actions.sendCode());

  return reporterSource.sendCode(code, type).then(result => {
    dispatch(actions.getReport(result));
  });
};

export default { ...actions, sendCode };
