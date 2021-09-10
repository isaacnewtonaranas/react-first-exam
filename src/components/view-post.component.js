/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import { connect } from "react-redux";
import { updatePost, deletePost } from "../actions/posts";

class Post extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.updateStatus = this.updateStatus.bind(this);
    this.updateContent = this.updateContent.bind(this);
    this.removePost = this.removePost.bind(this);

    this.state = {
      currentPost: {
        id: null,
        title: "",
        body: ""
      }
    };
  }

  componentDidMount() {
    this.setState({
      currentPost: this.props.location.state,
    });
  }

  onChangeTitle(e) {
    const title = e.target.value;

    this.setState(function (prevState) {
      return {
        currentPost: {
          ...prevState.currentPost,
          title: title,
        },
      };
    });
  }

  onChangeDescription(e) {
    const body = e.target.value;

    this.setState((prevState) => ({
      currentPost: {
        ...prevState.currentPost,
        body: body,
      },
    }));
  }

  updateStatus() {
    console.log("sdf")
    var data = {
      id: this.state.currentPost.id,
      title: this.state.currentPost.title,
      body: this.state.currentPost.body
    }
    this.props.updatePost(data)
    this.props.history.push("/posts")
  }

  updateContent() {
    this.props
      .updatePost(this.state.currentPost)
  }

  removePost() {
    this.props
      .deletePost(this.state.currentPost.id)
    this.props.history.push("/posts");
  }

  render() {
    const { currentPost } = this.state;

    return (
      <div>
        <div className="view-form">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="/posts">Posts</a></li>
              <li class="breadcrumb-item active" aria-current="page">{currentPost.title}</li>
            </ol>
          </nav>
          <img className="card-img-top cursor-pointer" src={`https://source.unsplash.com/random/300x100?sig=${currentPost.id}`}/>
          <h1>{currentPost.title}</h1>
          <p>{currentPost.body}</p>
        </div>
      </div>
    );
  }
}

export default connect(null, { updatePost, deletePost })(Post);
