
import './App.css';
import NavBar from './componentes/NavBar/NavBar'; 
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import CounterButton from './componentes/CounterButton/CounterButton';

function App() {
  const stock = 10;
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
      </header>
      <div>
        <ItemListContainer greeting="Bienvenido a tu vivero favorito"/>
      </div>
      <div className='divContainerCounterButton'>
        <CounterButton stock = {stock}/>
      </div>
    </div>
  );
}

export default App;
