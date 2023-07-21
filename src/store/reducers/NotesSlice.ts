import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { INote } from "../../models/Note"
import { INotes } from "../../models/Notes"
import { storageKey } from "../../models/StorageKey"

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

    saveNote: (state, action: PayloadAction<INote | null>) => {
      if (!action.payload) return
      const index = state.notes.findIndex(
        (note) => note.id === action.payload!.id
      )
      state.notes[index] = action.payload

      localStorage.setItem(storageKey, JSON.stringify(state.notes))
    },
  },
})
