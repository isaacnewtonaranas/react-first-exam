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
        <div className="edit-form">
          <h4>Edit Post <i className="fa fa-pen fa-xs "></i></h4>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              value={currentPost.title}
              onChange={this.onChangeTitle}
            />
          </div>
          <div className="form-group mt-2">
            <label htmlFor="body">Body</label>
            <textarea
              type="text"
              className="form-control mb-3"
              id="body"
              rows="7"
              value={currentPost.body}
              onChange={this.onChangeDescription}
            />
          </div>

          <button
            className="btn btn-sm btn-primary bg-purple"
            onClick={this.updateStatus}
            title="Save"
          >
            Save
          </button>
          <button
            className="btn btn-sm btn-danger bg-pink mx-2"
            onClick={this.removePost}
            title="Delete"
          >
            <i className="fa fa-trash"></i>
          </button>
        </div>
      </div>
    );
  }
}

export default connect(null, { updatePost, deletePost })(Post);
