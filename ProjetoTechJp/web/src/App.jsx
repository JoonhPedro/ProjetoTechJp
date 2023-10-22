import { useState } from 'react'
import './App.css'
import Header from './assets/components/Header.jsx'
import Menu from './assets/components/menu'

function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
      <div>
        <Header /> 
        <Menu/>
      </div>
       
    

    </>
  )
}

export default App
