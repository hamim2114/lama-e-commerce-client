import Pay from './components/Pay'
import Success from './components/Success'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import ProductList from './pages/ProductList'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pay' element={<Pay />} />
        <Route path='/success' element={<Success />} />
        <Route path='/products/:category' element={<ProductList />} />
        <Route path='/product/:id' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </div>
  )
}

export default App
