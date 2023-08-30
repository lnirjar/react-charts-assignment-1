import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { data } from "../../data/contacts";
import { generateId } from "../../lib/idGenerator";
import { Contact } from "../../types";

type InitialState = {
    data: Contact[]
}

const initialState: InitialState = {
    data
}

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        created: (state, action: PayloadAction<Omit<Contact, "id">>) => {
            state.data = [{ ...action.payload, id: generateId() }, ...state.data];
        },
        updated: (state, action: PayloadAction<Contact>) => {
            state.data = state.data.map(contact => {
                if (contact.id === action.payload.id) {
                    return action.payload;
                }
                return contact;
            })
        },
        deleted: (state, action: PayloadAction<Contact>) => {
            state.data = state.data.filter(contact => {
                return contact.id !== action.payload.id;
            })
        }
    }
})

export default contactsSlice.reducer;
export const { created, updated, deleted } = contactsSlice.actions;
