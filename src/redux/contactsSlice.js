import { createSlice } from "@reduxjs/toolkit";
import { addContact } from "./operations";

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const handlePending = (state) => {
  state.isLoading = true;
}

const handleRejection = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
}

const contactsSlice = createSlice({
  name: "contacts",
  initialState: initialState,
  extraReducers: builder => {
    builder
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(addContact.rejected, handleRejection)
      }
});



export default contactsSlice.reducer;
