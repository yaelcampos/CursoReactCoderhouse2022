import logo from '../../plantago.png';
import tulipan from '../../tulipan.jpg';
import './NavBar.style.css';
import Servicios from '../Servicios/Servicios';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <div>
                <img className="imageTulipanes" src={tulipan} alt="logo" />
            </div>
            <div className="navbar-contenedor">
                <div className="navbar-imagen-contenedor">
                    <img className="App-logo" src={logo} alt="logo" />
                </div>
                <div className="navbar-navegador-link">
                    <Link to={'/'}> 
                        Inicio
                    </Link>
                    <a className="nav-link" href="#">Tienda</a>
                    <Link to={'/servicios'}> 
                        Servicios
                    </Link>
                    <Link to={'/categoria/1'}> 
                        Plantas
                    </Link>
                    <Link to={'/categoria/2'}> 
                        Arboles
                    </Link>
                </div>
                <div className="navbar-navegador-contenedor">
                    <button className="nav-contenedor">Registrarse</button>
                    <button className="nav-contenedor">Contactos</button>
                    <CartWidget/>
                </div>
            </div> 
        </nav>
        
    );
};

export default NavBar;