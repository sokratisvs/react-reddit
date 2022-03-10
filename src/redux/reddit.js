import { createSlice, createSelector } from '@reduxjs/toolkit';

const initialState = {
  posts: [],
  error: false,
  isLoading: false,
  searchTerm: '',
};


export const dataSlice = createSlice({
  name: 'reddits',
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload
    },
    setSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { setPosts, setSearchTerm } = dataSlice.actions

export default dataSlice.reducer;

// selectors
const selectPosts = (state) => state.reddit.posts;
const selectSearchTerm = (state) => state.reddit.searchTerm;

export const selectFilteredPosts = createSelector(
  [selectPosts, selectSearchTerm],
  (posts, searchTerm) => {
    if (searchTerm !== '') {
      return posts.results.filter((post) =>
        post.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return posts.results;
  }
);
