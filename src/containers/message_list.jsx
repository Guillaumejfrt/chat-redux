import React, { Component } from 'react';
import Message from '../components/message';

// Redux imports
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Import actions
import { setMessages } from '../actions';

class MessageList extends Component {

  componentWillMount() {
    this.props.setMessages(this.props.selectedChannel);
  }

  componentDidMount() {
    // setinterval(() => { this.props.setMessages, 1000 });
    this.refresher = setInterval( () => {
      this.props.setMessages(this.props.selectedChannel)
    }, 1000);
  }

  componentWillUnmount() {
    this.refresher.clearInterval();
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
    messages: state.messages,
    selectedChannel: state.selectedChannel
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setMessages: setMessages },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);





