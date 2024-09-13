import { Routes, Route } from 'react-router-dom'
import './App.css'
import Chat from './component/Chat'
import Home from './component/Home'
import Login from './component/Login'
import Singin from './component/Singin'
import Navbar from './component/Navbar'
import AuthProvider from './component/Auth'
import Profile from './component/profile'
import Nopage from './component/Nopage'

function App() {

  return (
    <>
    <AuthProvider>
     <Navbar></Navbar>

     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/log-in' element={<Login/>}/>
       <Route path='/sing-in' element={<Singin/>}/>
       <Route path='/chat' element={<Chat/>}/>
       <Route path='/profile' element={<Profile/>}/>
       <Route path="*"  element={<Nopage/>}/>
     </Routes>
    </AuthProvider>
    </>
  )
}

export default App
