export const SUBMIT = 'SUBMIT';

// Action to increment count
export function submit(value) {
  return {
    type: SUBMIT,
    value,
  };
}
