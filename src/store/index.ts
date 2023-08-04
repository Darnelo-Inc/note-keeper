import { configureStore } from "@reduxjs/toolkit"
import { NotesSlice } from "./reducers/NotesSlice"
import { SelectedNoteSlice } from "./reducers/SelectedNoteSlice"
import { modalSlice } from "./reducers/ModalSlice"

export const store = configureStore({
  reducer: {
    [NotesSlice.name]: NotesSlice.reducer,
    [SelectedNoteSlice.name]: SelectedNoteSlice.reducer,
    [modalSlice.name]: modalSlice.reducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
