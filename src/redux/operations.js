// import axios from "axios";
// import { fetchingError, fetchingInProgress, fetchingSuccess } from "./contactsSlice";

// axios.defaults.baseURL = "https://663cfa8d17145c4d8c385d5c.mockapi.io/"

// export const fetchContacts = () => async dispatch => {
//     try {

//         dispatch(fetchingInProgress());
//         const response = await axios.get("/Contacts");
//         dispatch(fetchingSuccess(response.data));
//     } catch (e) {
//         dispatch(fetchingError(e.message))
//     }
// }



import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://663cfa8d17145c4d8c385d5c.mockapi.io/"

export const fetchContacts = createAsyncThunk("contacts/fetchAll",
    async (_, thunkAPI) => {
        try {
            const response = await axios.get("/Contacts");
            return response.data
        } catch (e){
            return thunkAPI.rejectWithValue(e.message);
        }
    })


export const addContact = createAsyncThunk("contacts/addContact",
    async (text, thunkAPI) => {
        try {   
            const response = await axios.post("/Contacts", { text })
            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
    )