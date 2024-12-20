import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const weatherFetch = createAsyncThunk(
  'weather/fetch',
  async function (rejectWithValue, dispatch) {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=55.751244&lon=37.618423&appid=c0c767d0dbd4142401b9bca74616fa02`,
    );
    const data = await response.json();
    dispatch(setWeather(data));
    return data;
  },
);

const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    weather: [],
    status: null,
    error: null,
  },
  reducers: {
    setWeather: (state, action) => {
      state.weather = action.payload;
    },
  },

  extraReducers: {
    [weatherFetch.pending]: (state) => {
      state.status = 'loading';
      state.error = null;
    },
    [weatherFetch.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.weather = action.payload;
    },
    [weatherFetch.rejected]: (state, action) => {},
  },
});

export const { setWeather } = weatherSlice.actions;
export default weatherSlice.reducer;
