import { FC, Fragment } from "react"
import DeleteIcon from "@mui/icons-material/Delete"
import IconButton from "@mui/material/IconButton"
import { useAppSelector } from "../../hooks/redux"
import { selectSelectedNote } from "../../store/selectors"
import { useDelete } from "../../hooks/useDelete"

interface selectedHoc {
  Selected: FC<{}>
  Unselected: FC<{}>
}

const withSelected = ({ Selected, Unselected }: selectedHoc) => {
  return function WithSelectedComponent(props: any) {
    const selected = useAppSelector(selectSelectedNote)
    return selected ? <Selected {...props} /> : <Unselected {...props} />
  }
}

const DelBtn: FC = () => {
  const deleteHandler = useDelete()
  return (
    <IconButton
      size="large"
      edge="start"
      color="inherit"
      aria-label="open modal"
      sx={{ ml: 2, mr: 1 }}
      onClick={() => deleteHandler()}
    >
      <DeleteIcon />
    </IconButton>
  )
}

export const DeleteBtn = withSelected({
  Selected: DelBtn,
  Unselected: Fragment,
})
