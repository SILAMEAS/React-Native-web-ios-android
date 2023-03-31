import {configureStore} from '@reduxjs/toolkit';
import useReducer from '../features/user/user';
import courseReducer from '@src/redux/features/courses/course';
import counterReducer from '@src/redux/counter/CounterSlice';
export const store = configureStore({
  reducer: {
    user: useReducer,
    course: courseReducer,
    counter: counterReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
