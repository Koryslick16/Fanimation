import './App.css'
import Navbar from './components/Navbar/Navbar'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer'
import Help from './pages/HelpCenter/Help'
import Gallery from './pages/Gallery/Gallery'
import About from './pages/AboutUs/About'
import Contact from './pages/ContactUs/Contact'
import Product from './pages/Products/Product'
import Ceiling from './pages/FanCategory/Ceiling'
import Pedestal from './pages/FanCategory/Pedestal'
import WallFan from './pages/FanCategory/WallFan'
import Exhaust from './pages/FanCategory/Exhaust'
import ScrollTop from './components/ScrollTop'

function App() {

  return (
    <>
      
      <div className="mainDiv">
      <Router>
        <Navbar/>
        <ScrollTop/>
        <Routes>
        <Route path='/' index element={<Home/>}/>  
        <Route path='/helpcenter' element={<Help/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path='/aboutUs' element={<About/>}/>
        <Route path='/contactUs' element={<Contact/>}/>
        <Route path='/products' element={<Product/>}/> 
        <Route path='/ceilingFan' element={<Ceiling/>}/>
        <Route path='/pedestalFan' element={<Pedestal/>}/> 
        <Route path='/wallFan' element={<WallFan/>}/>
        <Route path='/exhaustFans' element={<Exhaust/>}/>    
        </Routes>
        <Footer/>
      </Router>
      </div>
    
    </>
  )
}

export default App
