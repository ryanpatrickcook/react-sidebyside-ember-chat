import EventEmitter from 'events';

const emitter = new EventEmitter();
var messages = [
  { id: 1, text: 'hello world' }
];

export default {
  getMessages() {
    return messages.concat();
  },

  subscribe(callback) {
    emitter.on('update', callback);
  },

  unsubscribe(callback) {
    emitter.off('update', callback);
  },

  newMessage(message) {
    let msg = {
      id: Date.now() + Math.round(Math.random()*10000),
      text: message
    };

    messages.push(msg);
    emitter.emit('update');
  },

  updateMessage(message, text) {
    messages.forEach((m) => {
      if(m.id == message.id) {
        m.text = text;
        return;
      }
    });
    emitter.emit('update');
  }
};
