import {
    CREATE_POST,
    RETRIEVE_POSTS,
    UPDATE_POST,
    DELETE_POST,
    SEARCH_POSTS
  } from "./types";
  
  import PostDataService from "../services/post.service";
  
  export const createPost = (title, body) => dispatch => {
      dispatch({
        type: CREATE_POST,
        payload: { title, body },
      });
  };
  
  export const retrievePosts = () => async (dispatch) => {
    try {
      const res = await PostDataService.getAll();

      dispatch({
        type: RETRIEVE_POSTS,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
  
  export const updatePost = data => dispatch => {
      dispatch({
        type: UPDATE_POST,
        payload: data,
      });
  };
  
  export const deletePost = id => dispatch => {
      console.log(id)
      dispatch({
        type: DELETE_POST,
        payload: {id},
      });
  };
  
  export const findPosts = (posts,searchTerm) => dispatch => {
      dispatch({
        type: SEARCH_POSTS,
        payload: {posts,searchTerm},
      });
  };