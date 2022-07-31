import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllPost } from "../../utilities";

const initialState = {
  isFetching: false,
  isLoading: false,
  //   postsList: [],
};

export const fetchAllPosts = createAsyncThunk(
  "posts/fetchAllPosts",
  async (_args, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await getAllPost();
      if (response.status === 200 || response.status === 201) {
        return fulfillWithValue(response.data);
      } else if (response.status === 404) {
        return rejectWithValue(response.statusText);
      } else {
        return rejectWithValue(`Error while fetching.\n Reason: ${response}`);
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAllPosts.pending]: (state) => {
      return { ...state, isFetching: true, isLoading: true };
    },
    [fetchAllPosts.fulfilled]: (state, { payload }) => {
      return {
        ...state,
        isFetching: false,
        isLoading: false,
        postsList: payload,
      };
    },
    [fetchAllPosts.rejected]: (state, { payload }) => {
      return {
        ...state,
        isFetching: false,
        isLoading: false,
        postsList: payload,
      };
    },
  },
});

export default postsSlice.reducer;
