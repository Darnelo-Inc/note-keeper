import { INote } from "./../../models/index"
import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { INotes, storageKey } from "../../models"

const initialState: INotes = {
  notes: JSON.parse(localStorage.getItem(storageKey) || "[]"),
}

export const NotesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote: (state, action: PayloadAction<INote>) => {
      state.notes.push(action.payload)
      localStorage.setItem(storageKey, JSON.stringify(state.notes))
    },

    saveNote: (state, action: PayloadAction<INote>) => {
      const index = state.notes.findIndex(
        (note) => note.id === action.payload.id
      )
      state.notes[index] = action.payload

      localStorage.setItem(storageKey, JSON.stringify(state.notes))
    },
  },
})
