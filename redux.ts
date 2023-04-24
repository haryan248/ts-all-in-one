import { legacy_createStore as createStore, compose, applyMiddleware, Middleware } from "redux";
import reducer from "./reducers";
import { addPost } from "./actions/post";
import { logIn, logOut } from "./actions/user";
import { ThunkMiddleware } from "redux-thunk";

const initialState = {
  // keyof S
  user: {
    // S[K]
    isLoggingIn: true,
    loading: false,
    data: null,
  },
  posts: undefined,
};

// action이 store로 전달되기전에 하는 행동
const firstMiddleware: Middleware = (store) => (next) => (action) => {
  console.log("로깅", action);
  next(action);
};

// thunk
// action은 항상 객체인데, thunk는 action을 함수로 만들 수 있다.
// 비동기 액션이 가능해짐
const thunkMiddleware: Middleware = (store) => (next) => (action) => {
  if (typeof action === "function") {
    // 비동기
    return action(store.dispatch, store.getState);
  }
  return next(action); // 동기
};

const enhancer = applyMiddleware(firstMiddleware, thunkMiddleware as ThunkMiddleware);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

const store = createStore(reducer, initialState, enhancer);

console.log("1st", store.getState());

// --------------------------------------

store.dispatch(
  logIn({
    nickname: "zerocho",
    password: "1234",
  })
);
console.log("2nd", store.getState());

export { store };
//
// store.dispatch(addPost({
//   userId: 1,
//   id: 1,
//   content: '안녕하세요. 리덕스',
// }));
// console.log('3rd', store.getState());
// store.dispatch(addPost({
//   userId: 1,
//   id: 2,
//   content: '두번째 리덕스',
// }));
// console.log('4th', store.getState());
//
// store.dispatch(logOut());
// console.log('5th', store.getState());
