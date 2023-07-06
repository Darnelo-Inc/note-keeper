import {
  Box,
  Drawer,
  CssBaseline,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  TextField,
} from "@mui/material"
import InboxIcon from "@mui/icons-material/MoveToInbox"
import MailIcon from "@mui/icons-material/Mail"
import Navbar from "../components/Navbar"
import { useActions, useAppSelector } from "../hooks/redux"
import { selectNotes, selectSelectedNote } from "../store/selectors"
import { ChangeEvent } from "react"
import { useDebounce } from "../hooks/useDebouce"

const drawerWidth = 240

const Home = () => {
  const { notes } = useAppSelector(selectNotes)
  const { saveNote, setSelectedNote } = useActions()
  const selectedNote = useAppSelector(selectSelectedNote)

  const changeBodyHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedNote(
      selectedNote ? { ...selectedNote, body: e.target.value } : null
    )
    if (selectedNote) saveNote({ ...selectedNote, body: e.target.value })
  }

  const debouncedChangeBodyHandler = useDebounce(changeBodyHandler, 1000)

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Navbar />
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            {notes.length &&
              notes.map((note, index) => (
                <ListItem
                  key={note.id}
                  disablePadding
                  onClick={() => setSelectedNote(note)}
                >
                  <ListItemButton>
                    <ListItemIcon>
                      {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </ListItemIcon>
                    <ListItemText primary={note.title} />
                  </ListItemButton>
                </ListItem>
              ))}
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />

        {selectedNote && (
          <TextField
            multiline
            fullWidth
            minRows={20}
            variant="filled"
            placeholder="Введите текст"
            required
            size="medium"
            value={selectedNote.body}
            onChange={(e) => debouncedChangeBodyHandler(e)}
          />
        )}
      </Box>
    </Box>
  )
}

export default Home
