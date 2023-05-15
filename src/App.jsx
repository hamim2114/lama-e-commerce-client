import Pay from './components/Pay'
import Success from './components/Success'
import Home from './pages/Home'
import { Navigate, Route, Routes } from 'react-router-dom'
import ProductList from './pages/ProductList'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Login from './pages/Login'
import Register from './pages/Register'
import axios from 'axios'
import { BASE_URL } from './baseUrl'
import { useSelector } from 'react-redux'

axios.defaults.baseURL = BASE_URL

function App() {
 const {user} = useSelector(state => state.user)

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pay' element={<Pay />} />
        <Route path='/success' element={<Success />} />
        <Route path='/products/:category' element={<ProductList />} />
        <Route path='/product/:id' element={<Product />} />
        <Route path='/cart' element={!user ? <Navigate to='/login'/> : <Cart />} />
        <Route path='/login' element={user ? <Navigate to='/'/> : <Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </div>
  )
}

export default App
