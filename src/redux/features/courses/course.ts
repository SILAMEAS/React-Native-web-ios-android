import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface Course {
  id: number;
  title: string;
  duration: string;
}

const initialState: Course[] = [];

export const courseSlice = createSlice({
  initialState,
  name: 'user',
  reducers: {
    setCourses: (state, action: PayloadAction<Course[]>) => {
      console.log(action.payload);
      state = action.payload;
      return state;
    },
  },
});

export const {setCourses} = courseSlice.actions;
export default courseSlice.reducer;
