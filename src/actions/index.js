// TODO: add and export your own actions
export const SET_MESSAGES = 'SET_MESSAGES';

export function setMessages() {
  const promise = fetch('https://wagon-chat.herokuapp.com/general/messages')
    .then(response => response.json());
  return {
    type: SET_MESSAGES,
    payload: promise
  };
}
// TODO: add and export your own actions
