
import { BrowserRouter as Router,  Routes, Route } from 'react-router-dom'
import Home from './Menu/Home'
import About from './Menu/About'
import Countries from './Menu/Countries'
import Goals from './Menu/Goals'
import Contact from './Menu/Contact'
import Header from './header/Header'
import './App.css'

function App() {

  return (
    <Router>
     <Header />
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>} />
      <Route path='/countries' element={<Countries/>} />
      <Route path='/goals' element={<Goals />} />
      <Route path='/contact' element={<Contact/>} />
     </Routes>
   </Router>

  )
}

export default App
