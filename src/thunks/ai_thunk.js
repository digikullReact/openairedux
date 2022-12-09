/// Specifically for api communication
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';
import config from '../config';
export const fetchImages = createAsyncThunk(
    'ai_thunk/fetchImages',
    async (data) => {

        const configAxios={
            "headers":{
                "Authorization":"Bearer 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"
            }
        }
       // An async function return a promise
        const res=await axios.post("https://api.openai.com/v1/images/generations",data,configAxios);
        return res;
      
    }
  )