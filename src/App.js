import "./App.css";
import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer greeting="Te damos la Bienvenida al Espacio Sur"/>
    </div>
  );
}

export default App;
