import { createSlice } from '@reduxjs/toolkit'
import { fetchImages } from '../thunks/ai_thunk';

const initialState = {
    images:[{
        "url": "https://oaidalleapiprodscus.blob.core.windows.net/private/org-6IFPvczWPqnsRwA9v8DKusDv/user-RsgNuH7VyIJMNdD33qg4hyxQ/img-jbfbAho2uBwaXxKFSIZFLBPC.png?st=2022-12-08T12%3A40%3A33Z&se=2022-12-08T14%3A40%3A33Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2022-12-08T09%3A00%3A38Z&ske=2022-12-09T09%3A00%3A38Z&sks=b&skv=2021-08-06&sig=37CqQXfj1b3E/RJZHNfGHZXli6wx7RySZpnbBaIrQtU%3D"
    },
    {
        "url": "https://oaidalleapiprodscus.blob.core.windows.net/private/org-6IFPvczWPqnsRwA9v8DKusDv/user-RsgNuH7VyIJMNdD33qg4hyxQ/img-XLcuYBN7K83JTzC5IKWMy4Tj.png?st=2022-12-08T12%3A40%3A33Z&se=2022-12-08T14%3A40%3A33Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2022-12-08T09%3A00%3A38Z&ske=2022-12-09T09%3A00%3A38Z&sks=b&skv=2021-08-06&sig=lOzJBWvEX6RuGFL7ER23kNmSNIemzJLMcXHh8MQ2/Ek%3D"
    },
    {
        "url": "https://oaidalleapiprodscus.blob.core.windows.net/private/org-6IFPvczWPqnsRwA9v8DKusDv/user-RsgNuH7VyIJMNdD33qg4hyxQ/img-kAXbU5oQM8MElqQc9JxY8pf6.png?st=2022-12-08T12%3A40%3A33Z&se=2022-12-08T14%3A40%3A33Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2022-12-08T09%3A00%3A38Z&ske=2022-12-09T09%3A00%3A38Z&sks=b&skv=2021-08-06&sig=Q0hgrk4xZpK4IgfuEbClXqnpecOg%2Bn9XMuLKGbPpg5E%3D"
    },]

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
        builder.addCase(fetchImages.rejected,(state,action)=>{

        });

        builder.addCase(fetchImages.pending,(state,action)=>{

        });

    }

})

export default AiSlice.reducer;