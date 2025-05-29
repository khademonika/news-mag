import { useState } from "react"
import Navabar from "./components/Navbar"
import NewsBoard from "./components/NewsBoard"

function App() {


  return (
    <div>
      <Navabar setCategory= {setCategory}/>
      <NewsBoard category={category}/>
    </div>
  )
}

export default App

