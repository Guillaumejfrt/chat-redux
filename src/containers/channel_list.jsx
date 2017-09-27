import React, { Component } from 'react';

// Redux imports
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Import actions
import { selectChannel, setMessages } from '../actions';

class ChannelList extends Component {

  handleClick = (channel) => {
    this.props.selectChannel(channel);
    this.props.setMessages(channel);
  }

  render() {
    return(

      this.props.channels.map((channel) => {
        return <p key={channel} onClick={ () => this.handleClick(channel) }>@{channel}</p>
      })
    );
  }
}

function mapStateToProps(state) {
  return {
    channels: state.channelList
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      selectChannel: selectChannel,
      setMessages: setMessages
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);
