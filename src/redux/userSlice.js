import { createSlice } from "@reduxjs/toolkit";
import { userLogining, userLogout, userRegister } from "./operaction";
const initialState = {
  user: { name: null, email: null },
  token: "",
  isAuth: false,
  isLoading: false,
};
const userSlice = createSlice({
  name: "User",
  initialState: initialState,
  extraReducers: (builder) => {
    const pending = (state, actions) => {
      state.isLoading = true;
    };
    const rejected = (state, actions) => {
      state.isLoading = false;
      state.error = actions.payload;
    };
    builder
      .addCase(userRegister.pending)
      .addCase(userRegister.fulfilled, (state, actions) => {
        state.user.name = actions.payload.name;
        state.user.email = actions.payload.email;
        state.token = actions.payload.token;
        state.isAuth = true;
        state.isLoading = false;
      })
      .addCase(userRegister.rejected, rejected)
      .addCase(userLogining.pending, pending)
      .addCase(userLogining.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isAuth = true;
        state.isLoading = false;
      })
      .addCase(userLogining.rejected, rejected)
      .addCase(userLogout.pending, pending)
      .addCase(userLogout.fulfilled, (state, action) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoading = false;
        state.isAuth = false;
      })
      .addCase(userLogout.rejected, rejected);
  },
});

export const { register, login, logout } = userSlice.actions;

export const userReducer = userSlice.reducer;
