import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "./contactsSlice"
import filterReducer from "./filtersSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER, } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsPersistConfig = {
    key: "item",
    storage,
}

const persistedContactReducer = persistReducer(contactsPersistConfig, contactReducer)

const store = configureStore({
    reducer:{
        contacts: persistedContactReducer,
        filters: filterReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
    
});



export const persistor = persistStore(store);


export default store;