import Home from './pages/Home'
import Login from './pages/Login';
import Register from './pages/Register';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Checkout from './pages/Checkout';
import Cart from './pages/Cart';
import Header from './components/Header';
import Searching from './components/Searching';
import Hero from './components/Hero';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/checkout' element={<Checkout/>} />
          <Route path='cart' element={<Cart/>}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App;
