import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
const api = 'https://randomuser.me/api/?results=20';

export const fetchCharacters = createAsyncThunk(
  'characters/fetchCharacter',
  async () => {
    const response = await axios.get(api);
    return response.data.results;
  },
);

export const characterSlice = createSlice({
  name: 'character',
  initialState: {
    character: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [fetchCharacters.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchCharacters.fulfilled]: (state, action) => {
      state.character = [...state.character, ...action.payload];
      state.loading = false;
    },
    [fetchCharacters.rejected]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },
  },
});

export default characterSlice.reducer;
