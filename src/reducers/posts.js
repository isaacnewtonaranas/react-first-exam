import {
    CREATE_POST,
    RETRIEVE_POSTS,
    UPDATE_POST,
    DELETE_POST,
    SEARCH_POSTS
  } from "../actions/types";
  
  const initialState = [];
  
  function postReducer(posts = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case CREATE_POST:
        return [payload,...posts];
  
      case RETRIEVE_POSTS:
        return payload;
  
      case UPDATE_POST:
        return posts.map((post) => {
          if (post.id === payload.id) {
            return {
              ...post,
              ...payload,
            };
          } else {
            return post;
          }
        });
  
        case DELETE_POST:
            return posts.filter(({ id }) => id !== payload.id);
            
        case SEARCH_POSTS:
            return payload.posts.filter(post => 
                post.title.toLowerCase().includes(payload.searchTerm.toLowerCase()) || post.body.toLowerCase().includes(payload.searchTerm.toLowerCase())
            );
              
      default:
        return posts;
    }
  };
  
  export default postReducer;