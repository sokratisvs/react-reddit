import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const dataSlice = createSlice({
  name: 'subreddits',
  initialState,
  reducers: {
    storeData: (state, action) => {
        console.log('action', action);
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { storeData } = dataSlice.actions

export default dataSlice.reducer