import NavBar from './Components/NavBar'
import './App.css';
import Bienvenida from './Components/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import DetailsItem from "../src/Components/Details";
import ContainerCardItems from './Components/Cards/ContainerCardItems';
import { BrowserRouter, Route, Routes } from "react-router-dom"



function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Bienvenida />
      <Routes>
        <Route path='/' element={< ContainerCardItems />} />
        <Route path='/item/:idItem' element={< DetailsItem />} />
        <Route path='/category/:idCategory' element={< ContainerCardItems />} />
      </Routes>
    </BrowserRouter>
  
  );
}




export default App;
