import { createSlice } from "@reduxjs/toolkit";

export const PostSlice = createSlice({
  name: "",
  initialState: {
    value: [],
  },
  reducers: {},
});

export const selectPost = (state) => state.post.value;
export default PostSlice.reducer;
