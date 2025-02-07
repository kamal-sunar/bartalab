import './App.css'
import Navbar from './components/commons/navbar'
import Chat_dashboard from './pages/chat_dashboard'

import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {

  return (
    <div className=' bg-slate-800'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Chat_dashboard />}/>
          <Route path='/requests' element={<Chat_dashboard />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
