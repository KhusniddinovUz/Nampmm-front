import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const incrementLikeCount = createAsyncThunk("increment-like-count/", async (payload, {rejectWithValue}) => {
  try {
    const {data} = await axios.post("http://portal.mahoratmarkaz.uz:8001/metrics/increment-like-count/");
    return data;
  } catch (err) {
    console.log(err, "Like metrics fetch error");
    return rejectWithValue(err);
  }
})

export const incrementViewCount = createAsyncThunk("increment-view-count/", async (payload, {rejectWithValue}) => {
  try {
    const {data} = await axios.post("http://portal.mahoratmarkaz.uz:8001/metrics/increment-view-count/");
    return data;
  } catch (err) {
    console.log(err, "Like metrics fetch error");
    return rejectWithValue(err);
  }
})

const metricsSlice = createSlice({
  name: "metrics",
  initialState: {
    viewCount: 0,
    likeCount: 0,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(incrementLikeCount.fulfilled, (state, action) => {
      state.viewCount = action.payload["view_count"];
      state.likeCount = action.payload["like_count"];
    })
    builder.addCase(incrementViewCount.fulfilled, (state, action) => {
      state.viewCount = action.payload["view_count"];
      state.likeCount = action.payload["like_count"];
    })
  }
});

export default metricsSlice.reducer;
