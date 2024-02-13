import './App.css';
import {Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Passport from './pages/Passport';
import Visas from './pages/Visas';
import Pancard from './pages/Pancard';
import Contactus from './pages/Contactus';
import Aboutus from './pages/Aboutus';
import { Header } from './components/Header';
function App(){
  return(
    <div>
      <Header/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/passport" element={<Passport/>}/>
        <Route path="/visas" element={<Visas/>}/>
        <Route path="/pancard" element={<Pancard/>}/>
        <Route path="/contact" element={<Contactus/>}/>
        <Route path="/about" element={<Aboutus/>}/>
      </Routes>
    </div>
  )
}
export default App;