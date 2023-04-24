import { Reducer } from "redux";
import { LoginOutAction, LoginRequestAction, LoginSuccessAction, LoginSuccessData } from "../actions/user";

interface InitialState {
  isLoggingIn: boolean;
  data: LoginSuccessData | null;
  loading: boolean;
}
const initialState = {
  isLoggingIn: false,
  data: null,
  loading: false,
};

type UserReducerActions = LoginSuccessAction | LoginOutAction | LoginRequestAction;

const userReducer: Reducer<InitialState, UserReducerActions> = (prevState = initialState, action) => {
  // 새로운 state 만들어주기
  switch (action.type) {
    case "LOG_IN_REQUEST":
      return { ...prevState, loading: true };
    case "LOG_IN_SUCCESS":
      return {
        ...prevState,
        loading: false,
        data: action.data,
      };
    case "LOG_OUT":
      return {
        ...prevState,
        loading: false,
        data: null,
      };
    default:
      return prevState;
  }
};

export default userReducer;
