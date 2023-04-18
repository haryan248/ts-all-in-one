// 브라우저 > ky
// 노드 > got

import axios, { AxiosError, AxiosResponse } from "axios";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface Created {}
interface Data {
  title: string;
  body: string;
  userId: number;
}

(async () => {
  try {
    const response = await axios.get<Post, AxiosResponse<Post>>("https://jsonplaceholder.typicode.com/posts/1");
    console.log(response.data.userId);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log((error.response as AxiosResponse<{ message: string }>).data.message);
    }
    const errorResponse = (error as AxiosError<{ message: string }>).response;
  }
})();

(async () => {
  try {
    const response = await axios.post<Created, AxiosResponse<Created>, Data>(
      "https://jsonplaceholder.typicode.com/posts",
      {
        title: "foo",
        body: "bar",
        userId: 1,
      }
    );
  } catch (error) {}
})();

// 타이핑 직접 해보기

interface Config<D = any> {
  method?: "post" | "get" | "put" | "patch" | "delete" | "head" | "options";
  url?: string;
  data?: D;
}
interface A {
  get: <T, R = AxiosResponse<T>>(url: string) => Promise<R>;
  post: <T, R = AxiosResponse<T>, D = any>(url: string, data: D) => Promise<R>;
  isAxiosError: (error: unknown) => error is AxiosError;
  (config: Config): void;
  (url: string, config: Config): void;
}

const a: A = axios;
(async () => {
  try {
    const response = await a.get<Post, AxiosResponse<Post>>("https://jsonplaceholder.typicode.com/posts/1");
    console.log(response.data.userId);
  } catch (error) {
    if (a.isAxiosError(error)) {
      console.log((error.response as AxiosResponse<{ message: string }>).data.message);
    }
    const errorResponse = (error as AxiosError<{ message: string }>).response;
  }
})();

(async () => {
  try {
    const a: A = axios;
    const response = await a.post<Created, AxiosResponse<Created>, Data>("https://jsonplaceholder.typicode.com/posts", {
      title: "foo",
      body: "bar",
      userId: 1,
    });
  } catch (error) {}
})();

// defaults 가 위치한 이유
const a1 = new axios.Axios({ url: "" }).defaults;
axios("");
axios.defaults;
