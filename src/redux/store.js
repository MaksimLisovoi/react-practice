import { configureStore, createAction, createReducer } from '@reduxjs/toolkit';

const increment = createAction('myValue/increment');

console.log(increment.toString());

const myReducer = createReducer(10, {
  [increment]: (state, action) => state + action.payload,
});

export const store = configureStore({
  reducer: {
    myValue: myReducer,
  },
});
