import React, {Component} from 'react';
import './Post.css';
import { Button } from 'semantic-ui-react';
import EditModal from '../EditModal/EditModal.js';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false,
      post: {
        title: props.post.title,
        userId: props.post.userId,
        body: props.post.body,
        id: props.post.id
      }
    };
  }

  toggleEdit = () => {
    this.setState((prevState) => ({
      editMode: !prevState.editMode
    }));
  }

  onChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  updatePost = (post) => {
    this.setState((prevState) => ({
      editMode: false,
      post: Object.assign({}, prevState.post, post)
    }));
  }

  render() {
    const { deletePost, ind } = this.props;
    const { editMode } = this.state;
    const { title, body, userId, id } = this.state.post;
    return (
      <div className="post-ctn">
        <span className="post-id">
          {id}
        </span>
        <div className="post-title">
          {title}
        </div>
        <div className="post-user">
          {userId}
        </div>
        <div className="post-size">
          {body.length}
        </div>
        <div className="post-buttons">
          <Button
            circular
            icon='delete'
            color='red'
            onClick={() => deletePost(ind)}
          />
          <Button
            circular
            icon='edit'
            color='blue'
            onClick={() => this.toggleEdit()}
          />

        </div>
        {
          editMode
          &&
          <EditModal
            post={this.state.post}
            closeModal={this.toggleEdit}
            updatePost={this.updatePost}
          />
        }
      </div>
    )
  }
}

export default Post;
