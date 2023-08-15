import {
  AppBar,
  Button,
  IconButton,
  InputBase,
  Toolbar,
  Typography,
} from "@mui/material"
import { FC } from "react"
import MenuIcon from "@mui/icons-material/Menu"
import { styled, alpha } from "@mui/material/styles"
import SearchIcon from "@mui/icons-material/Search"

import { nanoid } from "nanoid"
import { useAppSelector, useActions } from "../hooks/redux"
import { selectNotes, selectSelectedNote } from "../store/selectors"
import { DeleteBtn } from "./hoc/withSelected"

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  width: "100%",
  marginLeft: 0,

  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}))

const SearchIconWrapper = styled("div")(({ theme }) => ({
  position: "absolute",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
  padding: theme.spacing(0, 2),

  pointerEvents: "none",
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    width: "100%",
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}))

const Navbar: FC = () => {
  const { notes } = useAppSelector(selectNotes)
  const selectedNote = useAppSelector(selectSelectedNote)
  const { addNote, saveNote, setSelectedNote, toggleConfirmModal } =
    useActions()

  const createEmptyNote = () => {
    const id: string = nanoid()
    const newNote = {
      id,
      title: `Note ${notes.length + 1}`,
      body: "",
    }
    addNote(newNote)
    setSelectedNote(newNote)
  }

  const addNoteHandler = () => {
    saveNote(selectedNote)
    createEmptyNote()
  }

  const deleteHandler = () => {
    toggleConfirmModal()
  }

  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="open drawer"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
        >
          Note Keeper
        </Typography>

        <Button
          color="primary"
          variant="contained"
          onClick={() => addNoteHandler()}
        >
          Add Note
        </Button>

        <DeleteBtn />

        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
