export const SEND_MESSAGE = 'SEND_MESSAGE';

// Action to send arbitrary message
export function submit(value) {
  return {
    type: SEND_MESSAGE,
    value,
  };
}
