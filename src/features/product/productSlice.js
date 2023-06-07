import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"


const BASE_URL = "https://fakestoreapi.com/products"


const initialState = { 
  product:[],
  singleProduct:{},
  search:"",
  status: "idle",
  error: ""
};

export const fetchProducts = createAsyncThunk("product/fetchProducts", async () => {
  const response = await axios.get(BASE_URL)
  // console.log(response.data)
  return response?.data
})

export const fetchSingleProduct = createAsyncThunk("product/fetchSingleProduct", async (id) => {
  const response = await axios.get(`${BASE_URL}/${id}`)
  return response?.data
})

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    searchReducer:(state,action)=>{
      state.search=action.payload
    },
  },
  extraReducers(builder) {
    builder
    .addCase(fetchProducts.pending, (state) => {
      state.status = "loading"
    })
    .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "loaded"
        state.product = action.payload
    })
    .addCase(fetchProducts.rejected, (state, action) => {
      state.status = "failed"
      state.error = action.error.message
    })
    .addCase(fetchSingleProduct.fulfilled, (state, action) => {
      state.singleProduct = action.payload
  })
  }
});

export const {searchReducer} = productSlice.actions;

export default productSlice.reducer;