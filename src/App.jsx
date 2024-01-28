import Navbar from './Component/Navbar'
import Back from './Component/Back'
import './App.css'
import About from './Component/About'
import Offer from './Component/Offer'
import Subscribe from './Component/Subscribe'
import End from './Component/End'
import New from './Pages/New'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {
  

  return (
    <Router>
    <>
    <Navbar></Navbar>
    
    
    <Routes>
      <Route path="/shop" element={<New></New>}></Route>
     
    </Routes>

    <Back></Back>
    <About></About>
    <Offer></Offer>
    <Subscribe></Subscribe>
    <End></End>
    </>
    </Router>
    
  )
}

export default App
