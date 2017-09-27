import React, { Component } from 'react';
import Message from '../components/message';
import { connect } from 'react-redux';

class MessageList extends Component {
  render() {
    const renderMessageList = this.props.messages.map((message) => {
        return <Message key={`${message.created_at}${message.author}`} message={message}/>
    });

    return(
      <div className="message-list">
        {renderMessageList}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    messages: state.messages
  };
}

export default connect(mapStateToProps)(MessageList);





