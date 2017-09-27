import React, { Component } from 'react';

// Redux imports
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Import actions
import { selectedChannel } from '../actions';

class ChannelList extends Component {

  handleClick = (channel) => {
    this.props.selectedChannel(channel);
  }

  render() {
    return(
      <div className="channel-list">
        {
          this.props.channels.map((channel) => {
            return <p key={channel} onClick={ () => this.handleClick(channel) }>@{channel}</p>
          })
        }
      </div>
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
    { selectedChannel: selectedChannel },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);
