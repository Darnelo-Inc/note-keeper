import { useActions } from "./redux"

export const useDelete = () => {
  const { toggleConfirmModal } = useActions()
  const deleteHandler = () => {
    toggleConfirmModal()
  }

  return deleteHandler
}
