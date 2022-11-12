import "./App.css";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/Navbar";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Cart from "./components/Cart/Cart"; 
import CartProvider from "./context/CartContext";
function App() {

   

  return (
    <BrowserRouter> 
      <CartProvider>
        <div className="App"> 
          <Navbar/>
          <Routes>
                <Route path="/" element={<ItemListContainer/>} />
                <Route path="/modalidad/:nombreModalidad" element={ <ItemListContainer/>}/>
                <Route path="/detail/:idProducto" element={ <ItemDetailContainer /> } />
                <Route path="/cart" element={ <Cart />} />
          </Routes>
        </div>
        </CartProvider>
    </BrowserRouter>
  );
}

export default App;
