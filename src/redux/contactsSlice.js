import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  item: [
    { id: nanoid(), name: "Gwyn (Boss)", number: "448-01-56" },
    { id: nanoid(), name: "Artorias (Eaten by Abbys)", number: "436-90-56" },
    { id: nanoid(), name: "Ornstein (Slain by ME)", number: "425-79-56" },
    { id: nanoid(), name: "Ciaran (Rest on the grave)", number: "357-13-56" },
    { id: nanoid(), name: "Gough (Blind shot)", number: "380-35-56" },
  ]
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: initialState,
  reducers: {
    addContact: {
      reducer(state, action) {
       state.item.push(action.payload);
      },
      prepare(data) {
        return {
          payload: {
            id: nanoid(),
            name: data.name,
            number: data.number,
          }
        };
      }
      },
      deleteContact: {
          reducer(state, action) {
          state.item = state.item.filter(contact => contact.id !== action.payload);
          }
      }
  }
});


export const { addContact, deleteContact } = contactsSlice.actions;

export default contactsSlice.reducer;
