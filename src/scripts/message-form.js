import React from 'react';

export default React.createClass({
  getInitialState() {
    return {
      input: ''
    };
  },

  submit(ev) {
    ev.preventDefault();
    var message = this.state.input;
    if(message === '') {
      return;
    }

    this.props.addMessage(message);
    this.setState({ input: '' });
  },

  updateInput(ev) {
    this.setState({ input: ev.target.value });
  },

  render() {
    return (
      <form className="message-form clearfix" onSubmit={this.submit}>
        <input type="text" value={this.state.input} onChange={this.updateInput} className="message-input" />
        <button type="submit" className="message-submit">Send</button>
      </form>
    );
  }
});
