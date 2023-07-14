import NavBar from './assets/components/Navbar/NavBar'
import ItemListContainer from './assets/components/ItemListContainer/ItemListContainer'
import './App.css'
import ItemDetailContainer from './assets/components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="/" element={<ItemListContainer/>}/>
      <Route path="/categoria/:idCategoria" element={<ItemListContainer/>}/>
      <Route path="/item/:idItem" element={<ItemDetailContainer/>}/>
    </Routes>
    </BrowserRouter>
    </>
    
  )
}

export default App
