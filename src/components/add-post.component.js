import React, { Component } from "react";
import { connect } from "react-redux";
import { createPost } from "../actions/posts";

class AddPost extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeBody = this.onChangeBody.bind(this);
    this.savePost = this.savePost.bind(this);
    this.newPost = this.newPost.bind(this);

    this.state = {
      id: null,
      title: "",
      body: "",
      submitted: false,
    };
  }

  onChangeTitle(e) {
    this.setState({
      title: e.target.value,
    });
  }

  onChangeBody(e) {
    this.setState({
      body: e.target.value,
    });
  }

  savePost() {
    const { title, body } = this.state;
    this.props
      .createPost(title, body)
      
    this.props.history.push("/posts")
  }

  newPost() {
    this.setState({
      id: null,
      title: "",
      body: "",
      submitted: false,
    });
  }

  render() {
    return (
      <div className="submit-form">
        <div>
          <h4>New Post </h4>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              required
              value={this.state.title}
              onChange={this.onChangeTitle}
              name="title"
            />
          </div>

          <div className="form-group">
            <label htmlFor="body">Body</label>
            <textarea
              type="text"
              className="form-control"
              id="body"
              rows="7"
              required
              value={this.state.body}
              onChange={this.onChangeBody}
            />
          </div>

          <button onClick={this.savePost} className="btn btn-success mt-2 btn-sm bg-purple">
            Add New Post
          </button>
        </div>
      </div>
    );
  }
}

export default connect(null, { createPost })(AddPost);
