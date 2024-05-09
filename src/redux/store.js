import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "./contactsSlice"
import filterReducer from "./filtersSlice";




const store = configureStore({
    reducer:{
        contacts: contactReducer,
        filters: filterReducer,
    }, 
});


export default store;