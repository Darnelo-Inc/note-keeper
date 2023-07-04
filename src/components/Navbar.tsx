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
import { useAppSelector, useActions } from "../hooks/redux"
import { selectNotes } from "../store/selectors"

const Navbar: FC = () => {
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

  const { notes } = useAppSelector(selectNotes)
  const { addNote } = useActions()

  const addNoteHandler = () => {
    addNote({ id: notes.length + 1, title: "Note 2", body: "Body 2" })
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
