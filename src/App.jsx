import './App.css'
import { Route, Routes } from 'react-router-dom';
import LoginPage from './components/pages/login/LoginPage'
import OrderPage from './components/pages/order/OrderPage';
import ErrorPage from './components/pages/error/ErrorPage';


function App() {
  //state 

   //comportements


  //affichae (render)
  return (
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/order/:username" element={<OrderPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
  )
}

export default App
