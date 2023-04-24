export type AddPostData = { title: string };
export type AddPostAction = { type: "ADD_POST"; data: AddPostData };
export const addPost = (data: AddPostData) => {
  return {
    type: "ADD_POST",
    data,
  };
};

export default {
  addPost,
};
