import { useState } from "react"
import Navabar from "./components/Navbar"
import NewsBoard from "./components/NewsBoard"

function App() {
  const [category,setCategory] = useState("general")

  return (
    <div>
      <Navabar setCategory= {setCategory}/>
      <NewsBoard category={category}/>
    </div>
  )
}

export default App

