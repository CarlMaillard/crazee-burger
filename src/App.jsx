import { useState } from 'react'
import './App.css'
import LoginPage from './components/pages/login/LoginPage'


function App() {
  //state 
  const [count, setCount] = useState(0);

   //comportements


  //affichae (render)
  return (
    <>
      <div>
        <LoginPage/>
      </div>
    </>
  )
}

export default App
