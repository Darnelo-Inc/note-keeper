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
      // const prevNotes = JSON.stringify(localStorage.getItem(storageKey) || "[]")
      localStorage.setItem(storageKey, JSON.stringify(action.payload))
    },
  },
})
