import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const contactSlice = createSlice({
    name : 'contact',
    initialState : {
        contact : []
    },
    reducers : {

    }
})

export const contactinsert = createAsyncThunk('contactinsert',async(object)=>{
    const res = await axios.post(`http://localhost:3000/contact`,object);
    return res;
}) 

export const contactdelete = createAsyncThunk('contactdelete',async(id)=>{
    const res = await axios.delete(`http://localhost:3000/contact/${id}`);
    return res;
}) 

export const userupdate = createAsyncThunk('userupdate',async(object)=>{
    const res = await axios.patch('http://localhost:3000/contact/${object.id}',object);
    return res;
}) 

export const contactget = createAsyncThunk('contactget',async()=>{
    const res = await axios.post('http://localhost:3000/contact');
    return res;
}) 

export const {} = contactSlice.actions
export default contactSlice.reducer