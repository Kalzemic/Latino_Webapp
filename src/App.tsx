import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import './components/HomePage'
import HomePage from './components/HomePage'
import InstructorsPage from './components/InstructorsPage'
import BackgroundVideo from './components/BackgroundVideo'
import Navbar from './components/Navbar'
import BackgroundMusic from './components/BackgroundMusic'
import './components/ContactPage'
import ContactPage from './components/ContactPage'
function App() {


  return (
    <BrowserRouter>
      <div className='video-container'>
        <BackgroundVideo />
      </div>
      <Navbar />
      <div className="main-container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/instructors" element={<InstructorsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
      <BackgroundMusic />
    </BrowserRouter>
  )
}

export default App
