import { createSlice } from "@reduxjs/toolkit"
import { ModalState } from "../../models/Modal"

const initialState: ModalState = {
  confirmModal: false,
}

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggleConfirmModal: (state) => {
      state.confirmModal = !state.confirmModal
    },
  },
})
