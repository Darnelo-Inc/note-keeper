import { RootState } from ".."

export const selectNotes = (state: RootState) => state.notes

export const selectSelectedNote = (state: RootState) => state.selectedNote.note

export const selectConfirmModal = (state: RootState) => state.modal.confirmModal
