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

  headingLabel() {
    let messageCount = this.state.messages.length;
    return `App: ${this.props.title} - (${messageCount})`;
  },

  render() {
    return (
      <div className="chat-room">
        <h1>{this.headingLabel()}</h1>
        <MessageList messages={this.state.messages} />
        <MessageForm addMessage={this.newMessage} />
      </div>
    );
  }
});
