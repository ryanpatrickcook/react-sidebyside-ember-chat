import React from 'react';
import MessageStore from './message-store';
import MessageList from './message-list';
import MessageForm from './message-form';

export default React.createClass({
  getInitialState() {
    return {
      messages: MessageStore.getMessages()
    };
  },

  componentWillMount() {
    MessageStore.subscribe(this.updateMessages);
  },

  componentWillUnmount() {
    MessageStore.unsubscribe(this.updateMessages);
  },

  updateMessages() {
    this.setState({
      messages: MessageStore.getMessages()
    });
  },

  newMessage(newMessage) {
    MessageStore.newMessage(newMessage);
  },

  render() {
    let title = `App: ${this.props.title}`;
    return (
      <div className="chat-room">
        <h1>{title}</h1>
        <MessageList messages={this.state.messages} />
        <MessageForm addMessage={this.newMessage} />
      </div>
    );
  }
});
