import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { useEffect } from 'react'
import Home from './Home/Home'
import Navbar from './NavbarFooter/Navbar'
import Promotions from './Promotions/Promotions'
import Orders from './Orders/Orders'
import Profile from './Profile/ProfileLoginRegister'
import ProfileStatus from './Profile/ProfileStatus'
import AuthProvider from './Context/AuthProvider'
import RestaurantProducts from './Restaurant/RestaurantProducts'
import ProductDetail from './Restaurant/ProductDetails'
import CartProvider from './Context/CartProvider'
import CartProducts from './CartWidget/CartProducts'
// import { uploadProducts } from './Firebase/bulkProducts'
function App() {

  // useEffect(() =>{
  //   uploadProducts()
  // },[])

  return (
    <AuthProvider>
      <CartProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:restaurants" element={<RestaurantProducts />} />
            <Route path="/:restaurants/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<CartProducts/>} />
            <Route path="promociones" element={<Promotions />} />
            <Route path="pedidos" element={<Orders />} />
            <Route path="perfil" element={<Profile />} />
            <Route path="perfil/:status" element={<ProfileStatus />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </AuthProvider>
  )
}

export default App
