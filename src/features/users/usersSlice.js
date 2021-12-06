import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Login } from "./usersApi";

const initialState = {
  user: null,
  isauth: false,
  autherror: {
    iserror: false,
    message: "",
  },
  authstatus: "",
};

/* export const login = createAsyncThunk("users/login", async (data) => {
  const response = await Login(data);
  return response;
}); */

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: {
  /*   [login.pending]: (state, action) => {
      state.authstatus = "loading";
    },
    [login.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.authstatus = "success";
    },
    [login.rejected]: (state, action) => {
      state.authstatus = "faiFlure";
    }, */
  },
});

export const { } = usersSlice.actions;

export const selectuser = (state) => state.users.user;
export const selectauthstatus = (state) => state.users.authstatus;
export const selectautherror = (state) => state.users.autherror;
export const selectisauth = (state) => state.users.isauth;

export default usersSlice.reducer;