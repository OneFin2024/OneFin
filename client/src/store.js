import { configureStore } from '@reduxjs/toolkit'
import prequalifySlice from './reducers/prequalifySlice';





const store = configureStore({
    reducer: {  
        prequalify:prequalifySlice,


      },
  
})
export default store