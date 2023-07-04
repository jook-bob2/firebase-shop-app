import { PROVIDER_CONST } from '../constants';
import { userInitialState } from '../states';

export const userReducer = (_state, { type, payload }) => {
  switch (type) {
    case PROVIDER_CONST.USER.ADD:
      return payload;
    case PROVIDER_CONST.USER.INIT:
      return userInitialState;
    default:
      break;
  }
};
