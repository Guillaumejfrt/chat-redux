import React, { Component } from 'react';
import Message from '../components/message';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Import actions
import { setMessages } from '../actions';

class MessageList extends Component {

  componentWillMount() {
    this.props.setMessages();
  }

  render() {
    const renderMessageList = this.props.messages.map((message) => {
      return <Message key={`${message.created_at}${message.author}`} message={message} />;
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setMessages: setMessages },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);





