import { createSlice } from "@reduxjs/toolkit";

const filtersInitialState = {
  filter: '',
};

const filtersSlice = createSlice({
  name: "filters",
  initialState: filtersInitialState,
  reducers: {
    changeFilter(state, action) {
      state.filter = action.payload;
    }
  },
});

export const { changeFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
