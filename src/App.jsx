import './App.css'
import Navbar from './components/Navbar/Navbar'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer'
import Help from './pages/HelpCenter/Help'
import Gallery from './pages/Gallery/Gallery'
import About from './pages/AboutUs/About'
import Contact from './pages/ContactUs/Contact'

function App() {

  return (
    <>
      
      <div className="mainDiv">
      <Router>
        <Navbar/>
        <Routes>
        <Route path='/' index element={<Home/>}/>  
        <Route path='/helpcenter' element={<Help/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path='/aboutUs' element={<About/>}/>
        <Route path='/contactUs' element={<Contact/>}/>       
        </Routes>
        <Footer/>
      </Router>
      </div>
    
    </>
  )
}

export default App
