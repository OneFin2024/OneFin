import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchPrequalify=createAsyncThunk('fetchPrequalify',async ()=>{
 
    try {
     const res =await axios.get("http://localhost:3001/api/Prequalify/getAllPrequalify")

     console.log("aaaaaaaaaaaaaaaaaaaaaaa",res.data);   
     
      return res.data
    } catch (error) {
     console.log(error);   
    } 
  }) 


const prequalifySlice = createSlice({
    name: 'prequalify',
    initialState: {
      DataPrequalify:[],
      loading: null,
      error:false,
    },
  

    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(fetchPrequalify.fulfilled, (state, action) => {
          // Add user to the state array
          state.DataPrequalify = action.payload;
          state.loading = false;
          
        })
        builder.addCase(fetchPrequalify.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error; 
          })  
          builder.addCase(fetchPrequalify.pending, (state, action) => {
            state.loading = true; 
          })

    },
})


export default prequalifySlice.reducer