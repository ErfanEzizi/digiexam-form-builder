import { configureStore } from '@reduxjs/toolkit'
import formReducer  from './reducer';

const store = configureStore({
  reducer: formReducer
});

export type State = ReturnType<typeof store.getState>;
export default store