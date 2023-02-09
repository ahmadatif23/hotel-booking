import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import List from './pages/list/List'
import Hotel from './pages/hotel/Hotel'
import Navbar from "./components/navbar/Navbar"
import Header from "./components/header/Header"

function App() {
  return (
    <BrowserRouter>
        <Navbar/>
        <Header/>

      <Routes>
        <Route path='/' element={ <Home/> } />
        <Route path='/hotels' element={ <List/> } />
        <Route path='/hotel/:id' element={ <Hotel/> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
