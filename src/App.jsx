import Home from './pages/Home'
import Login from './pages/Login';
import Register from './pages/Register';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Checkout from './pages/Checkout';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/checkout' element={<Checkout />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
