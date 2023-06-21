import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await fetch('./data/products.json');
    const data = await response.json();
    return data.products; // Extract the 'products' array from the JSON data
  }
);

const productSlice = createSlice({
  name: 'products',
  initialState: {
    data: localStorage.getItem('products')
    ? JSON.parse(localStorage.getItem('products'))
    : [],
    loading: false,
    error: null,
  },
  reducers: {
    addProduct: (state, action) => {
      state.data.push(action.payload); // Add the new product to the existing array
      localStorage.setItem('products', JSON.stringify(state.data));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
  },
});

export const { reducer: productReducer } = productSlice; 
export const { addProduct } = productSlice.actions;
export default productSlice.reducer;
