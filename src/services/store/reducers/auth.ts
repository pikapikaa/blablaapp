import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '../store';

export interface AuthState {
  isAuthorized: boolean;
}

const initialState: AuthState = {
  isAuthorized: true,
};

export const auhtSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
});

export const selectAuth = (state: RootState) => state.auth.isAuthorized;

export default auhtSlice.reducer;
