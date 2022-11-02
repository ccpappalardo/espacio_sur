import "./App.css";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/Navbar";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Cart from "./components/Cart/Cart";
function App() {

   

  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <Routes>
            <Route path="/" element={<ItemListContainer/>} />
            <Route path="/modalidad/:nombreModalidad" element={ <ItemListContainer/>}/>
            <Route path="/detail/:idProducto" element={ <ItemDetailContainer /> } />
            <Route path="/cart" element={ <Cart />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
