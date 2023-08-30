import { configureStore } from '@reduxjs/toolkit'
import contactsReducer from '../features/contacts/contactsSlice'

const store = configureStore({
    reducer: {
        contacts: contactsReducer
    }
});

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
