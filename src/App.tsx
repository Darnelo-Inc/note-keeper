import { useLayoutEffect } from "react"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import { storageKey } from "./models"

function App() {
  useLayoutEffect(
    () =>
      localStorage.setItem(
        storageKey,
        '[{ "id": 1, "title": "Note 1", "body": "Body 1" }]'
      ),
    []
  )

  return (
    <>
      <Home />
    </>
  )
}

export default App
