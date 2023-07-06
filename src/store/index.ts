import { configureStore } from "@reduxjs/toolkit"
import { NotesSlice } from "./reducers/NotesSlice"
import { SelectedNoteSlice } from "./reducers/SelectedNoteSlice"

export const store = configureStore({
  reducer: {
    [NotesSlice.name]: NotesSlice.reducer,
    [SelectedNoteSlice.name]: SelectedNoteSlice.reducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
