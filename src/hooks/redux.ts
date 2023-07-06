import { NotesSlice } from "./../store/reducers/NotesSlice"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../store"
import { bindActionCreators } from "@reduxjs/toolkit"
import { SelectedNoteSlice } from "../store/reducers/SelectedNoteSlice"

export const useAppDispatch: () => AppDispatch = useDispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

const actions = { ...NotesSlice.actions, ...SelectedNoteSlice.actions }

export const useActions = () => {
  const dispatch = useAppDispatch()
  return bindActionCreators(actions, dispatch)
}
