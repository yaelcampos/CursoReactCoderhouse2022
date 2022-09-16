
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './componentes/NavBar/NavBar'; 
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import Servicios from './componentes/Servicios/Servicios';
import Footer from './componentes/Footer/Footer';



function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<ItemListContainer/>} />
        <Route path="/categoria/:id" element={<ItemListContainer/>} />
        <Route path="servicios" element={<Servicios/>} />
        <Route path="/detail/:id" element={<ItemDetailContainer/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
