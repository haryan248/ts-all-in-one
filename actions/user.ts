import { AnyAction, Dispatch } from "redux";
export type LoginRequestData = { nickname: string; password: string };
export const logIn = (data: LoginRequestData) => {
  // async action creator
  return (dispatch: Dispatch<AnyAction>, getState: () => any) => {
    // async action
    dispatch(logInRequest(data));
    try {
      setTimeout(() => {
        dispatch(
          logInSuccess({
            userId: 1,
            nickname: "zerocho",
          })
        );
      }, 2000);
    } catch (e) {
      dispatch(logInFailure(e));
    }
  };
};

export type LoginRequestAction = {
  type: "LOG_IN_REQUEST";
  data: LoginRequestData;
};
const logInRequest = (data: LoginRequestData): LoginRequestAction => {
  return {
    type: "LOG_IN_REQUEST",
    data,
  };
};

export type LoginSuccessData = { userId: number; nickname: string };
export type LoginSuccessAction = {
  type: "LOG_IN_SUCCESS";
  data: LoginSuccessData;
};
const logInSuccess = (data: LoginSuccessData): LoginSuccessAction => {
  return {
    type: "LOG_IN_SUCCESS",
    data,
  };
};

const logInFailure = (error: any) => {
  return {
    type: "LOG_IN_FAILURE",
    error,
  };
};

export type LoginOutAction = {
  type: "LOG_OUT";
};
export const logOut = (): LoginOutAction => {
  return {
    // action
    type: "LOG_OUT",
  };
};

export default {
  logIn,
  logOut,
};
