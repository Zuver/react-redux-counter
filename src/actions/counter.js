export const INCREMENT_COUNT = 'INCREMENT_COUNT';
export const DECREMENT_COUNT = 'DECREMENT_COUNT';
export const DOUBLE_COUNT = 'DOUBLE_COUNT';

// Action to increment count
export function incrementCount() {
  console.log('2. INCREMENT_COUNT action is being dispatched'); // eslint-disable-line

  return {
    type: INCREMENT_COUNT,
  };
}

// Action to decrement count
export function decrementCount() {
  console.log('2. DECREMENT_COUNT action is being dispatched'); // eslint-disable-line

  return {
    type: DECREMENT_COUNT,
  };
}

// Action to double count
export function doubleCount() {
  console.log('2. DOUBLE_COUNT action is being dispatched'); // eslint-disable-line

  return {
    type: DOUBLE_COUNT,
  };
}
