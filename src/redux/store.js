import {configureStore} from '@reduxjs/toolkit';
import characterSlice from './characterSlice/characterSlice';

export const store = configureStore({
  reducer: {
    characters: characterSlice,
  },
});
