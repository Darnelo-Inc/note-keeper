import * as React from "react"
import Button from "@mui/material/Button"
import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogTitle from "@mui/material/DialogTitle"
import { useActions, useAppSelector } from "../../hooks/redux"
import { selectConfirmModal } from "../../store/selectors"

export default function AlertDialog() {
  const confirmModal = useAppSelector(selectConfirmModal)
  const { toggleConfirmModal } = useActions()

  const handleClickOpen = () => {
    toggleConfirmModal()
  }

  const handleClose = () => {
    toggleConfirmModal()
  }

  const handleDelete = () => {
    handleClose()
  }

  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open alert dialog
      </Button>
      <Dialog
        open={confirmModal}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are you sure to delete this note?"}
        </DialogTitle>

        <DialogActions>
          <Button onClick={handleClose}>No</Button>
          <Button onClick={handleDelete} autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
