import React from 'react';
import MessageList from '../containers/message_list';
import MessageForm from '../containers/message_form';

const App = () => {
  return (
    <div>
      <div className="app">
        <MessageList />
      </div>

        <MessageForm />

    </div>
  );
}

export default App;
