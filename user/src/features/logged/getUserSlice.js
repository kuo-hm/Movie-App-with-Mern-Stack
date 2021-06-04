// import {
//   createSlice,
//   createAsyncThunk,
//   createEntityAdapter,
// } from "@reduxjs/toolkit";
// import axios from "axios";

// export const userAdapter = createEntityAdapter();

// export const postUser = createAsyncThunk(
//   "user/postUser",
//   async (user, { rejectWithValue }) => {
//     const email = user.email;

//     const config = {
//       header: {
//         "Content-Type": "application/json",
//       },
//     };
//     try {
//       const { data } = await axios.post(
//         "/api/auth/info",
//         { mail: email },
//         config
//       );
//       console.log(data.data);
//     } catch (error) {
//       if (!error.response) {
//         throw error;
//       }
//       localStorage.setItem("errsor", error.response.data.error);

//       return rejectWithValue(error.response.data);
//     }
//   }
// );
// const getUserSlice = createSlice({
//   name: "user",
//   initialState: userAdapter.getInitialState({
//     error: null,
//     isLogged: false,
//     user: "",
//   }),
//   reducers: {},
//   extraReducers: {
//     [postUser.fulfilled]: (state, action) => {
//       state.user = action.payload;
//     },

//     [postUser.rejected]: (state, action) => {
//       if (action.payload) {
//         state.error = action.payload;
//       } else {
//         state.error = action.error;
//       }
//     },
//   },
// });
// export const selectLoginError = (state) => state.user.error;

// export default getUserSlice.reducer;

//-----------------------------------------------------------------------------------------------------------------------
import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import axios from "axios";

export const userAdapter = createEntityAdapter();

export const postUser = createAsyncThunk(
  "login/postLogin",
  async (user, { rejectWithValue }) => {
    const mail = user.email;

    localStorage.removeItem("error");

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };
    try {
      const { data } = await axios.post("/api/auth/info", { mail }, config);
      localStorage.setItem("authTssoken", data);
      localStorage.removeItem("error");
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      localStorage.setItem("error", error.response.data.error);

      return rejectWithValue(error.response.data);
    }
  }
);

const getUserSlice = createSlice({
  name: "user",
  initialState: userAdapter.getInitialState({ error: null, isLogged: false }),
  reducers: {},
  extraReducers: {
    [postUser.fulfilled]: (state, action) => {
      state.isLogged = true;
    },

    [postUser.rejected]: (state, action) => {
      if (action.payload) {
        state.error = action.payload;
      } else {
        state.error = action.error;
      }
    },
  },
});

export const selectLoginError = (state) => state.login.error;

export default getUserSlice.reducer;
