import React, { Component } from 'react';
import './EditModal.css'
import { Button, Modal, Form } from 'semantic-ui-react';

class EditModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.post.title,
      body: props.post.body,
      userId: props.post.userId
    }
  }

  onChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name] : value
    });
  }
  render() {
    const { title, body, userId } = this.state;
    const { closeModal, post, updatePost } = this.props;
    return (
      <Modal className="modal" open={true}>
        <Modal.Header>Edit Post #{post.id}</Modal.Header>
        <Modal.Content>
          <Form>
            <Form.Group>
              <Form.Field width={14}>
                <label>Title</label>
                <input
                  name='title'
                  placeholder='Title'
                  value={title}
                  onChange={this.onChange}
                  autoFocus={true}
                />
              </Form.Field>
              <Form.Field width={2}>
                <label>User Id</label>
                <input
                  name='userId'
                  placeholder='Title'
                  value={userId}
                  onChange={this.onChange}
                  type="number"
                />
              </Form.Field>
            </Form.Group>
          <Form.Field>
            <label>Post Body</label>
            <textarea
              name="body"
              value={body}
              onChange={this.onChange}
            />
          </Form.Field>
        </Form>
        <Button.Group floated={'right'} className="modal-btns">
          <Button onClick={closeModal}>
            Cancel
          </Button>
          <Button positive onClick={() => updatePost(this.state)}>
            Save
          </Button>
        </Button.Group>
        </Modal.Content>
      </Modal>
    );
  }
}

export default EditModal;
