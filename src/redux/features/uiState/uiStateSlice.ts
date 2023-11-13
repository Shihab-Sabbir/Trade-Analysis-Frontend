import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AppState } from '../../store';

export interface IuiState {
  sidebarCollapsed: boolean;
}

const initialState: IuiState = {
  sidebarCollapsed: false,
};

export const uiStateSlice = createSlice({
  name: 'uiState',
  initialState,
  reducers: {
    setSidebarCollapsed: (state, action: PayloadAction<boolean>) => {
        state.sidebarCollapsed = action.payload;
      },
  },
});

// Action creators are generated for each case reducer function
export const { setSidebarCollapsed } = uiStateSlice.actions;

export const selectUiState = (state:AppState) => state.uiState;

export default uiStateSlice.reducer;
