import {PayloadAction, createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {RootState} from '../store';
import {client} from '../api';
import {User} from '../../../domain/User';

const URL = `https://dummyjson.com/users`;

type AuthPayload = {
  users: User[];
};

export interface AuthState {
  isAuthorized: boolean;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | undefined;
  user: User | null;
}

const initialState: AuthState = {
  isAuthorized: false,
  status: 'idle',
  error: undefined,
  user: null,
};

const fetchAsyncThunk = (prefix: string) => {
  return createAsyncThunk(prefix, async (query: string) => {
    const response = await client(URL + query);
    return response;
  });
};

export const fetchUsers = fetchAsyncThunk('auth/fetchUsers');

export const auhtSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: state => {
      state.isAuthorized = false;
      state.user = null;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchUsers.pending, state => {
        state.status = 'loading';
      })
      .addCase(
        fetchUsers.fulfilled,
        (state, action: PayloadAction<AuthPayload>) => {
          state.status = 'succeeded';
          state.isAuthorized = true;
          state.user = action.payload.users[0];
        },
      )
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const {logout} = auhtSlice.actions;

export const selectAuth = (state: RootState) => state.auth.isAuthorized;
export const selectUser = (state: RootState) => state.auth.user;

export default auhtSlice.reducer;
