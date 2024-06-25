import React from 'react'
import Navbar from './component/Navbar'
import Home from './component/Home'
import { Route, Routes } from 'react-router-dom'
import Product from './component/Product'
import ProductDetails from './component/ProductDetails'
import Cart from './component/Cart'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product' element={<Product />} />
        <Route path='/product/:id' element={<ProductDetails />} />
        <Route path='cart' element={<Cart />} />
      </Routes>
    </>
  )
}

export default App