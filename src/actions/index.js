// TODO: add and export your own actions
export const SET_MESSAGES = 'SET_MESSAGES';
export const POST_MESSAGE = 'POST_MESSAGE';
export const SELECTED_CHANNEL = 'SELECTED_CHANNEL';

export function setMessages() {
  const promise = fetch('https://wagon-chat.herokuapp.com/general/messages')
    .then(response => response.json());
  return {
    type: SET_MESSAGES,
    payload: promise
  }
}

export function createMessage(channel, author, content) {
  const promise = fetch(`https://wagon-chat.herokuapp.com/${channel}/messages`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ "author": author, "content": content })
  }).then(r => r.json());

  return {
    type: POST_MESSAGE,
    payload: promise
  }
}

export function selectedChannel(channel) {
  return {
    type: SELECTED_CHANNEL,
    payload: channel
  };
}
