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
import { useAppSelector } from "../hooks/redux"
import { selectNotes } from "../store/selectors"

const drawerWidth = 240

const Home = () => {
  const { notes } = useAppSelector(selectNotes)

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
                <ListItem key={note.id} disablePadding>
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

        <TextField
          multiline
          fullWidth
          minRows={20}
          variant="filled"
          placeholder="Введите текст"
          required
          size="medium"
        />
      </Box>
    </Box>
  )
}

export default Home
