import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css"
import "./App.css";

import ViewPost from "./components/view-post.component";
import AddPost from "./components/add-post.component";
import Post from "./components/post.component";
import PostsList from "./components/posts-list.component";

class App extends Component {
  render() {
    
    return (
      <Router>
          <Link to={"/add"} className="add-button">
            <i className="fa fa-plus fa-lg"></i>
          </Link>
        <nav className="navbar navbar-expand navbar-dark p-3">
          <Link to={"/posts"} className="navbar-brand">
            <span className="ml-2">Front End Dev Exam</span>
          </Link>
        </nav>

        <div className="container-fluid mt-3">
          <Switch>
            <Route exact path={["/", "/posts"]} component={PostsList} />
            <Route exact path="/add" component={AddPost} />
            <Route path="/posts/:id" component={Post} />
            <Route path="/viewpost/:id" component={ViewPost} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
