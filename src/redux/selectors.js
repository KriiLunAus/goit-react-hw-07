import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = (state) => state.contacts;

export const selectItems = (state) => state.contacts.items;

export const selectNameFilter = (state) => state.filters;

export const selectSortedList = createSelector(
    [selectItems, selectNameFilter],
    (items, nameFilter) => {
       return  items.filter((item) => {
         return item.name.toLowerCase().includes(nameFilter.name.toLowerCase());
  });
    }
)