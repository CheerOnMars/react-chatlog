import React, { Component } from 'react';
import '../App.css';
import PropTypes from 'prop-types';
import Message from './Message';

class Chatlog extends React.Component {

  static propTypes = {
  data: PropTypes.array,
  main: PropTypes.string
}
  render() {
    // Fill in your code here
    // const messages = this.props.messages;
    const chatComponents = this.props.chatMessages.map((message) => {
      return (
        <Message
        key={message.timeStamp}
          sender={message.sender}
          body={message.body}
          timeStamp={message.timeStamp}
        />
      );
    });
    return(
      <section className="chat-log">
      {chatComponents}
      </section>
    );


    // const chatlogMessages = this.props.messages
    //
    // return (
    //   <section chatlogMessages="chatlog">
    //   {chatlogMessages}
    //   </section>
    // );
  }
}

export default Chatlog;
