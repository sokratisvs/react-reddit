import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './data';

export const store = configureStore({
    reducer: {
        data: dataReducer, //use this data reducer function to handle all updates to that state.
    }
});