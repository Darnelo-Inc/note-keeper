import { useLayoutEffect } from "react"
import Home from "./pages/Home"
import { storageKey } from "./models"

import { ThemeProvider, createTheme } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
})

const App = () => {
  useLayoutEffect(
    () =>
      localStorage.setItem(
        storageKey,
        '[{ "id": 1,"title": "Note 1","body": "Body 1" }]'
      ),
    []
  )

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Home />
    </ThemeProvider>
  )
}

export default App
