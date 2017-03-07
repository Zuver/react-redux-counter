export const SEND_MESSAGE = 'SEND_MESSAGE';

// Action to send arbitrary message
export function submit(value) {
  console.log('2. SEND_MESSAGE action is being dispatched with a value of: ' + value); // eslint-disable-line

  return {
    type: SEND_MESSAGE,
    value,
  };
}
