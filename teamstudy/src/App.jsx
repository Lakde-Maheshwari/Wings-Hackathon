import './App.css'
import React from 'react'
import VideoChat from './components/videochat'
import Navbar from './components/Navbar'
import LobbyScreen from './components/LobbyScreen'
import {Routes,Route, useLocation} from 'react-router-dom'
import Home from './components/Home'
import LoginForm from './components/Login'
import RegisterForm from './components/Register'
import Whiteboard from './components/whiteboard'
import BadCredentials from './components/BadCredentials'
import Profile from './components/profile'  
import CoinReward from './components/rewardComponent'
function App() {

  const location = useLocation();

  const hideNavbarRoutes = ["/login", "/register","/whiteboard","/videochat","/join","/invalidinfo"];

  return (
    <div className='App'>
      {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<LoginForm />} />
        <Route path='/register' element={<RegisterForm />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/invalidinfo' element={< BadCredentials/>} />
      </Routes>
      <Routes>
        <Route path='/videochat' element={<VideoChat />} />
        <Route path='/join' element={<LobbyScreen />} />
        <Route path='/whiteboard' element={<Whiteboard />} />
        <Route path='/reward' element={< CoinReward/>} />
      </Routes>
    </div>
  )
}

export default App
