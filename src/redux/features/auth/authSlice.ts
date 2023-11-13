import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IUser } from '../../../interfaces/user.interfaces';

export interface authState {
  user: null | IUser;
  accessToken: null | string;
}

const initialState: authState = {
  user: null,
  accessToken: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<{user:IUser, accessToken:string}>) => {
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
    },
    logout : (state) => {
      state.user = null;
      state.accessToken = null;
    }
  },
});

// Action creators are generated for each case reducer function
export const { addUser, logout } = authSlice.actions;

export default authSlice.reducer;
