import logo from '../../plantago.png';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
    return (
        <nav>
            <div className="navbar-contenedor">
                <div className="navbar-imagen-contenedor">
                    <img className="App-logo" src={logo} alt="logo" />
                </div>
                <div className="navbar-navegador-link">
                    <a className="nav-link" href="#">Macetas</a>
                    <a className="nav-link" href="#">Plantas</a>
                    <a className="nav-link" href="#">Servicios</a>
                </div>
                <div className="navbar-navegador-contenedor">
                    <CartWidget/>
                    <button className="nav-contenedor">Registrarse</button>
                    <button className="nav-contenedor">Contactos</button>
                </div>
            </div> 
        </nav>
        
    );
};

export default NavBar;