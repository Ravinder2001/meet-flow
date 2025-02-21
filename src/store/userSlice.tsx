import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    id: null,
    isAuthenticated: false,
  },
  reducers: {
    setUser: (state, action) => {
      state.id = action.payload.id;
      state.isAuthenticated = true;
    },
    clearUser: (state) => {
      state.id = null;
      state.isAuthenticated = false;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
