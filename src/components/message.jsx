import React from 'react';

const Message = (props) => {
  const time = props.message.created_at.match(/(\d+:\d+:\d+)/);
  return(
    <div className="message">
      <h5><strong>{props.message.author}</strong> - {time[0]}</h5>
      <p>{props.message.content}</p>
    </div>
  );
}

export default Message;
