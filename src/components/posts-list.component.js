/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import { connect } from "react-redux";
import {
  retrievePosts,deletePost,updatePost,findPosts
} from "../actions/posts";
import { Link } from "react-router-dom";

class PostsList extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchPost = this.onChangeSearchPost.bind(this);
    this.removePost = this.removePost.bind(this);
    this.originalPosts = []
    this.state = {
      searchPost: ""
    };
  }
  componentDidMount() {
    if(this.props.posts.length === 0){
      this.props.retrievePosts()
    }
  }

  onChangeSearchPost(e) {
    const searchPost = e.target.value;

    this.setState({
      searchPost: searchPost,
    });
    
    this.props.findPosts(this.originalPosts,searchPost)
  }

  removePost(id) {
    // this.originalPosts.filter(post => post.id !== id)
    this.props.deletePost(id)
    this.originalPosts = []
  }

  render() {
    const { searchPost } = this.state;
    const { posts } = this.props;
    if(this.originalPosts.length === 0){
      this.originalPosts = posts
    }

    return (
      <div className="list row d-flex justify-content-around">
        <div className="col-md-8">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by title"
              value={searchPost}
              onChange={this.onChangeSearchPost}
            />
          </div>
        </div>

        <div className="row d-flex justify-content-around">
          {posts &&
            posts.map((post, index) => (
              <div className="col-md-3 p-2" key={index}>
                <div className="card" >
                  <Link
                    to={{
                      pathname:"/viewpost/" + post.id,
                      state: post
                    }}
                    title="Edit"
                  >
                    <img className="card-img-top cursor-pointer" src={`https://source.unsplash.com/random/300x100?sig=${post.id}`}/>
                  </Link>
                  <div className="card-body">
                    <h5 className="card-title ellipsis clamp1">{post.title}</h5>
                    <p className="card-text ellipsis clamp2">{post.body}</p>
                    <Link
                      to={{
                        pathname:"/posts/" + post.id,
                        state: post
                      }}
                      className="btn btn-sm btn-primary bg-purple"
                      title="Edit"
                    >
                      Edit
                    </Link>
                    <a 
                      href="#"
                      className="btn btn-sm btn-danger bg-pink mx-2"
                      title="Delete"
                      onClick={()=>this.removePost(post.id)}
                    >
                      <i className="fa fa-trash"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

export default connect(mapStateToProps, {
  retrievePosts,
  deletePost,
  updatePost,
  findPosts
})(PostsList);
