import React from 'react';
import MessageList from '../containers/message_list';
import MessageForm from '../containers/message_form';
import ChannelList from '../containers/channel_list';

const App = () => {
  return (
    <div className="app">
      <div className="channel-list">
        <ChannelList />
      </div>

      <div className="chatroom">
        <MessageList />
        <MessageForm />
      </div>
    </div>
  );
}

export default App;
