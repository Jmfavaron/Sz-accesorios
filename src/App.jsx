import Navbar from "./componentes/Navbar/Navbar";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div>
      <Navbar></Navbar>

      <ItemListContainer greeting = "Hola Mundo!"/>
    </div>
  )
}

export default App
