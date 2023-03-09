import ProductsPage from './pages/ProductsPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/productos' element={<ProductsPage />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
