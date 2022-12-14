import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  currentPost: {},
  total: 0,
  currentPage: 0,
  searchParams: { field: "type", value: "" },
};

export const postsSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    onGetPosts: (state, action) => {
      const { payload } = action;
      state.posts = payload;
    },

    onSetTotalPosts: (state, action) => {
      const { payload } = action;
      state.total = payload;
    },

    onChangeCurrentPage: (state, action) => {
      const { payload } = action;
      state.currentPage = payload;
    },

    onSetSearchParams: (state, action) => {
      const { payload } = action;
      state.searchParams = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  onGetPosts,
  onSetTotalPosts,
  onChangeCurrentPage,
  onSetSearchParams,
} = postsSlice.actions;

export default postsSlice.reducer;
