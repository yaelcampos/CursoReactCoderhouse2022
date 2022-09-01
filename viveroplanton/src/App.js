
import './App.css';
import NavBar from './componentes/NavBar/NavBar'; 
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
      </header>
        <ItemListContainer greeting="Bienvenido a tu vivero favorito"/>
    </div>
  );
}

export default App;
