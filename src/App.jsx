import NavBar from './assets/components/Navbar/NavBar'
import ItemListContainer from './assets/components/ItemListContainer/ItemListContainer'
import './App.css'
import ItemDetailContainer from './assets/components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CarritoProvider } from './context/CarritoContext'
import Cart from './assets/components/Cart/Cart'
import Checkout from './assets/components/Checkout/Checkout'


const App = () => {
  return (
    <>
      <BrowserRouter>
        <CarritoProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/categoria/:idCategoria" element={<ItemListContainer />} />
            <Route path="/item/:idItem" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart/>}  />
            <Route path="/Checkout" element={<Checkout/>} />
            <Route path="*" element={<h2>Sitio en construcción</h2>}/>
          </Routes>
        </CarritoProvider>
      </BrowserRouter>
    </>

  )
}

export default App
