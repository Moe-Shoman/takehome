import React, { Component } from 'react';
import Post from '../Post/Post';
import axios from 'axios';
import './Posts.css';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }
  componentWillMount() {
    this.getData();
  }

  getData() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(({ data }) => {
      this.setState({
        posts: data
      });
    });
  }

  deletePost = (ind) => {
    this.setState((prevState) => ({
      posts: [
        ...prevState.posts.slice(0, ind),
        ...prevState.posts.slice(ind + 1)
      ]
    }));
  }
  render() {
    return (
      <div className="posts">
        <div className="post-ctn">
          <span className="post-id head-item">
            #
          </span>
          <div className="post-title head-item">
            Title
          </div>
          <div className="post-user head-item">
            User Id
          </div>
          <div className="post-size head-item">
            Size
          </div>
        </div>
        {this.state.posts.map((post, i) => (
          <Post
            post={post}
            ind={i}
            key={post.title + i}
            deletePost={this.deletePost}
          />
        ))}
      </div>
    );
  }
}

export default Posts;
