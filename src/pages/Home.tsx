import { ChangeEvent } from "react"
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
  Typography,
} from "@mui/material"
import InboxIcon from "@mui/icons-material/MoveToInbox"
import MailIcon from "@mui/icons-material/Mail"
import Navbar from "../components/Navbar"
import { useActions, useAppSelector } from "../hooks/redux"
import {
  selectConfirmModal,
  selectNotes,
  selectSelectedNote,
} from "../store/selectors"
import { useDebounce } from "../hooks/useDebouce"
import AlertDialog from "../components/ui/AlertDialog"

const drawerWidth = 240

const Home = () => {
  const { notes } = useAppSelector(selectNotes)
  const confirmModal = useAppSelector(selectConfirmModal)
  const { saveNote, setSelectedNote } = useActions()
  const selectedNote = useAppSelector(selectSelectedNote)

  const debouncedSaveNote = useDebounce(saveNote, 1000)

  const changeBodyHandler = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setSelectedNote(
      selectedNote ? { ...selectedNote, body: e.target.value } : null
    )
    debouncedSaveNote({ ...selectedNote!, body: e.target.value })
  }

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Navbar />
        {!!notes ? (
          <>
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
              <Box
                sx={{
                  overflow: "auto",
                }}
              >
                <List>
                  {notes.map((note, index) => (
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

              {!!selectedNote && (
                <TextField
                  multiline
                  fullWidth
                  minRows={20}
                  variant="filled"
                  placeholder="Введите текст"
                  required
                  size="medium"
                  value={selectedNote.body}
                  onChange={(e) => changeBodyHandler(e)}
                />
              )}
            </Box>
          </>
        ) : (
          <Typography
            variant="h3"
            gutterBottom
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              zIndex: 1,

              transform: "translate3d(-50%, -50%, 0)",
            }}
          >
            No notes
          </Typography>
        )}
      </Box>
      {confirmModal && <AlertDialog />}
    </>
  )
}

export default Home
