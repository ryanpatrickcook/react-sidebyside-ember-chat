import React from 'react';
import ChatMessage from './chat-message';

export default React.createClass({
  componentDidUpdate(prevProps, prevState) {
    if(this.props.messages.length > prevProps.messages.length) {
      var container = this.refs.messageContent;
      container.scrollTop = container.scrollHeight;
    }
  },

  allMessages() {
    return this.props.messages.map((msg) => {
      return <ChatMessage key={msg.id} message={msg} />;
    });
  },

  render() {
    return (
      <div className="message-list">
        <div className="message-list-wrapper">
          <div ref="messageContent" className="message-list-content">
            {this.allMessages()}
          </div>
        </div>
      </div>
    );
  }
});
