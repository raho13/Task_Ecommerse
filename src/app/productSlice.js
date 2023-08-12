import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const productsSlice = createSlice({
  name: 'prducts',
  initialState,
  reducers: {
  
    setData: (state, action) => {
      state.value = action.payload
    },
  },
})

export const {  setData } = productsSlice.actions

export default productsSlice.reducer