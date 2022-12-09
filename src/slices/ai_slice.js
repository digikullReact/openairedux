import { createSlice } from '@reduxjs/toolkit'
import { fetchImages } from '../thunks/ai_thunk';

const initialState = {
    images:[],


}

const AiSlice=createSlice({
    name:"Aislice",
    initialState,
    reducers:{

    },
    extraReducers:(builder)=>{
        builder.addCase(fetchImages.fulfilled,(state,action)=>{
            state.images=action.payload.data.data
    


        });
        builder.addCase(fetchImages.rejected,(state)=>{
        
        });

        builder.addCase(fetchImages.pending,(state)=>{
          

        });

    }

})

export default AiSlice.reducer;