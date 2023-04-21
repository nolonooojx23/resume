
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import About from './pages/About'
import Create from './pages/Create'
import Home from './pages/Home'
import Skills from './pages/Skills'
import 'animate.css';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/create' element={<Create />} />
        </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
