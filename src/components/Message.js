import React, { Component } from 'react';
import '../App.css';

import Timestamp from './Timestamp';
import PropTypes from 'prop-types';

class Message extends React.Component {

  static propTypes = {
    sender: PropTypes.string.isRequired,
    body: PropTypes.string,
    time: PropTypes.string.isRequired,
    main: PropTypes.string
  };

   isLocal = () => {
    if (this.props.sender === "Vladimir") {
      return 'chat-entry local';
    } else if (this.props.sender === "Estragon") {
      return 'chat-entry remote';
    }
    else 'chat-entry remote';
  };

  render() {
    const messageSender = this.props.sender
    const messageBody = this.props.body
    const messageTimestamp = this.props.timeStamp
    return (
      <article className={this.isLocal()} >
      <p className="entry-name"> {messageSender} </p>
      <div className="entry-bubble">
      <p className="entry-body"> {messageBody} </p>
      <p className="entry-time"> {messageTimestamp} </p>
      </div>
      </article>

    )
  }
}

export default Message;
