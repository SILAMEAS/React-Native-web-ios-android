import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface User {
  id: number;
  email: string;
  password: string;
  timestamp?: string;
}

const initialState: User = {
  id: 0,
  email: 'user@example.com',
  password: '123456',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.id = action.payload.id;
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.timestamp = action.payload?.timestamp;
    },
  },
});

export const {setUser} = userSlice.actions;
export default userSlice.reducer;
