import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { INote, selectedNote } from "../../models/Note"

const initialState: selectedNote = {
  note: null,
}

export const SelectedNoteSlice = createSlice({
  name: "selectedNote",
  initialState,
  reducers: {
    setSelectedNote: (state, action: PayloadAction<INote | null>) => {
      state.note = action.payload
    },
  },
})
