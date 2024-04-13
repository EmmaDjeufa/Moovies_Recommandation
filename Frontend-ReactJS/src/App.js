import "./App.css"
import { Pages } from "./components/pages/Pages"
import { useEffect } from "react"

//npm install --save aos@next
//aos
import AOS from "aos"
import "aos/dist/aos.css"

function App() {
  //aos
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])
  return (
    <>
      <div className="app">
        <Pages />
      </div>
    </>
  )
}

export default App

