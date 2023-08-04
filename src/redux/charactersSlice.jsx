import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const limit=[1,2,3,4,5,6,7,8,9,10,11,12]

export const fetchCharacters=createAsyncThunk('characters/getCharacters',async ()=>{
    const res=await axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}/character/${limit}`)
    return res.data;
})

export const charactersSlice=createSlice({
    name:"characters",
    initialState:{
        items:[],
        status:"idle",
        page:0
    },
    reducers:{},
    extraReducers:{
        [fetchCharacters.pending]:(state,action)=>{
            state.status="loading"
        },
        [fetchCharacters.fulfilled]:(state,action)=>{
            state.items=action.payload
            state.page+=1
            state.status="succeeded"
        },
        [fetchCharacters.rejected]:(state,action)=>{
            state.status="failed"
            state.error=action.error.message;
        }
    }
})

export default charactersSlice.reducer;