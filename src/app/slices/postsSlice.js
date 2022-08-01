import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getAllPost,
  getPost,
  deletePostById,
  createPostAPI,
} from "../../utilities";

const initialState = {
  isFetching: false,
  isLoading: false,
  postsList: [],
  selectedPost: [],
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

export const fetchSelectPosts = createAsyncThunk(
  "posts/fetchSelectPosts",
  async (id, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await getPost(id);
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

export const deleteSelectPost = createAsyncThunk(
  "posts/deleteSelectPost",
  async (id, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await deletePostById(id);
      if (response.status === 200 || response.status === 201) {
        window.location.reload();
        window.alert("Post Deleted!");
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

export const createPost = createAsyncThunk(
  "posts/createPost",
  async (data, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await createPostAPI(data);
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
  reducers: {
    clearSelectedPost: (state) => {
      state.selectedPost = [];
    },
  },
  extraReducers: {
    // fetchAllPosts AsyncThunk
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

    // fetchSelectPosts AsyncThunk
    [fetchSelectPosts.pending]: (state) => {
      return { ...state, isFetching: true, isLoading: true };
    },
    [fetchSelectPosts.fulfilled]: (state, { payload }) => {
      return {
        ...state,
        isFetching: false,
        isLoading: false,
        selectedPost: [payload],
      };
    },
    [fetchSelectPosts.rejected]: (state, { payload }) => {
      return {
        ...state,
        isFetching: false,
        isLoading: false,
        selectedPost: payload,
      };
    },

    // deleteSelectPost AsyncThunk
    [deleteSelectPost.pending]: (state) => {
      return { ...state, isFetching: true, isLoading: true };
    },
    [deleteSelectPost.fulfilled]: (state, { payload }) => {
      return {
        ...state,
        isFetching: false,
        isLoading: false,
        selectedPost: [],
      };
    },
    [deleteSelectPost.rejected]: (state, { payload }) => {
      return {
        ...state,
        isFetching: false,
        isLoading: false,
      };
    },

    // createPost AsyncThunk
    [createPost.pending]: (state) => {
      return { ...state, isFetching: true, isLoading: true };
    },
    [createPost.fulfilled]: (state, { payload }) => {
      return {
        ...state,
        isFetching: false,
        isLoading: false,
        postsList: [...state.postsList, payload],
      };
    },
    [createPost.rejected]: (state, { payload }) => {
      return {
        ...state,
        isFetching: false,
        isLoading: false,
      };
    },
  },
});

export const { clearSelectedPost } = postsSlice.actions;

export default postsSlice.reducer;
