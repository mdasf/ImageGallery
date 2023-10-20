import './App.css'
import Home from './component/Home'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Popup from './component/Popup'

function App() {
  return (
   
      <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/:id' element={<Gallery />} /> */}
        <Route path='/photos/:id' element={<Popup />} />
        <Route path='*' element={<Home />} />
      </Routes>
    </Router>
    
   
  )
}

export default App
