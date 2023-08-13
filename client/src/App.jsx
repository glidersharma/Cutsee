import CanvasModel from "./canvas"
import Home from "./pages/Home"
import Customizer from './pages/Customizer'
import { useRef, useState } from "react"
function App() { 
  const [currentrref,setcurrentref] = useState();
  return (
    <main className="app transition-all erase-in">
      <Home/>
      <CanvasModel  setcurrentref={setcurrentref}/>
      <Customizer currentrref={currentrref}/>
    </main>
  )
}

export default App
