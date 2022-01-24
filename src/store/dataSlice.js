import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  albums: [],
  photos: [],
  loading: true
};

const baseAlbumURL = "https://jsonplaceholder.typicode.com/albums";
const basePhotoURL = "https://jsonplaceholder.typicode.com/photos";

export const fetchAlbumsFromAPI = createAsyncThunk("data/albums", async () => {
  const res = await axios.get(baseAlbumURL);
  const albums = res.data;
  return albums;
});

export const fetchPhotosFromAPI = createAsyncThunk("data/photos", async () => {
  const res = await axios.get(basePhotoURL);
  const photos = res.data;
  return photos;
});

export const dataSlice = createSlice({
  name: "data",
  initialState,
  extraReducers: {
    [fetchAlbumsFromAPI.fulfilled]: (state, action) => {
      state.albums = action.payload;
      state.loading = false;
    },
    [fetchAlbumsFromAPI.pending]: (state) => {
      state.loading = true;
    },
    [fetchPhotosFromAPI.fulfilled]: (state, action) => {
      state.photos = action.payload;
      state.loading = false;
    },
    [fetchPhotosFromAPI.pending]: (state) => {
      state.loading = true;
    }
  }
});
