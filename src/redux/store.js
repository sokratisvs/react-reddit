import { configureStore } from '@reduxjs/toolkit';
import redditReducer from './reddit';

export const store = configureStore({
    reducer: {
        reddit: redditReducer, //use this data reducer function to handle all updates to that state.
    }
});