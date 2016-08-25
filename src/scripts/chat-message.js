import React from 'react';
import MessageStore from './message-store';

export default React.createClass({
  getInitialState() {
    return {
      editInput: '',
      isEditing: false
    };
  },

  editMessage(e) {
    e.preventDefault();
    this.setState({
      editInput: this.props.message.text,
      isEditing: true
    });
  },

  updateMessage(e) {
    e.preventDefault();
    this.setState({ isEditing: false });
    MessageStore.updateMessage(this.props.message, this.state.editInput);
  },

  updateInput(e) {
    this.setState({ editInput: e.target.value });
  },

  submitInput(e) {
    if (e.which == 13) {
      this.updateMessage(e);
    }
  },

  inputText() {
    let inputText = this.props.message.text;
    if (this.state.isEditing) {
      inputText = <input type="text" value={this.state.editInput} onChange={this.updateInput} onKeyDown={this.submitInput} />
    }
    return inputText;
  },

  actionButton() {
    let btn = <a className="btn-edit-message " onClick={this.editMessage}>Edit</a>;
    if (this.state.isEditing) {
      btn = <a className="btn-edit-message " onClick={this.updateMessage}>Done</a>;
    }
    return btn;
  },

  render() {
    return (
      <div data-id={this.props.message.id} className="chat-message">
        {this.inputText()}
        {this.actionButton()}
      </div>
    );
  }
});
