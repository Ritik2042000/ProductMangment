import { Route, Routes } from 'react-router-dom'
import './App.css'
import ProductList from './pages/ProductList'
import Cart from './pages/Cart'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<ProductList/>} />
      <Route path='/cart' element={<Cart/>} />
    </Routes>
      <ToastContainer />
    </>
  )
}

export default App
