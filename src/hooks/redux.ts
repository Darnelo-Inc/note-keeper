import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import { bindActionCreators } from "@reduxjs/toolkit"
import { AppDispatch, RootState } from "../store"
import { SelectedNoteSlice } from "../store/reducers/SelectedNoteSlice"
import { NotesSlice } from "./../store/reducers/NotesSlice"

export const useAppDispatch: () => AppDispatch = useDispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

const actions = { ...NotesSlice.actions, ...SelectedNoteSlice.actions }

export const useActions = () => {
  const dispatch = useAppDispatch()
  return bindActionCreators(actions, dispatch)
}
