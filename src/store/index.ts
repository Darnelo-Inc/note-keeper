import { configureStore } from "@reduxjs/toolkit"
import { NotesSlice } from "./reducers/NotesSlice"

export const store = configureStore({
  reducer: { [NotesSlice.name]: NotesSlice.reducer },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
