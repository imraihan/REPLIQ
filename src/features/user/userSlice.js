import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchUserData = createAsyncThunk('user/fetchUserData', async () => {
  try {
    const response = await fetch('./data/user.json');
    const data = await response.json();
    return data.userdata;
  } catch (error) {
    throw new Error('Error retrieving user data');
  }
});

export const login = createAsyncThunk('user/login', async (loginData) => {
  try {
    const response = await fetch('./data/user.json');
    const data = await response.json();
    const userData = data.userdata.find(
      (user) => user.phone === loginData.phone && user.password === loginData.password
    );

    if (userData) {
      return userData;
    } else {
      throw new Error('Invalid login credentials');
    }
  } catch (error) {
    throw new Error('Error retrieving user data');
  }
});

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    isAuthenticated: JSON.parse(localStorage.getItem('isAuthenticated')) || false,
    user: JSON.parse(localStorage.getItem('userData')) || null,
    userdata: [],
    error: null,
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
      localStorage.setItem('isAuthenticated', true);
      localStorage.setItem('userData', JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      localStorage.removeItem('isAuthenticated');
      localStorage.removeItem('userData');
    },
    registerSuccess: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
      localStorage.setItem('isAuthenticated', true);
      localStorage.setItem('userData', JSON.stringify(action.payload));
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserData.pending, (state) => {
      state.userdata = [];
      state.error = null;
    });
    builder.addCase(fetchUserData.fulfilled, (state, action) => {
      state.userdata = action.payload;
      state.error = null;
    });
    builder.addCase(fetchUserData.rejected, (state, action) => {
      state.userdata = [];
      state.error = action.error.message;
    });
    // Add the case for login fulfilled
    builder.addCase(login.fulfilled, (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    });
    // Add the case for login rejected
    builder.addCase(login.rejected, (state, action) => {
      state.isAuthenticated = false;
      state.user = null;
      state.error = action.error.message;
    });
  },
});

export const { loginSuccess, logout, registerSuccess } = userSlice.actions;

export default userSlice.reducer;
