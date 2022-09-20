import logo from '../../plantago.png';
import hojasMojadas from '../../hojas_mojadas.jpeg';
import './NavBar.style.css';
import Servicios from '../Servicios/Servicios';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <div>
                <img className="imageHojas" src={hojasMojadas} alt="logo" />
            </div>
            <div className="navbar-contenedor">
                <div className="navbar-imagen-contenedor">
                    <img className="App-logo" src={logo} alt="logo" />
                </div>
                <div className="navbar-navegador-link">
                    <Link className="nav-link" to={'/'}> 
                        Inicio
                    </Link>
                    <Link className="nav-link"  to={'/categoria/1'}>     
                        Plantas
                    </Link>
                    <Link className="nav-link"  to={'/categoria/2'}> 
                        Arboles
                    </Link>
                    <Link  className="nav-link"  to={'/Servicios'}> 
                        Servicios
                    </Link>
                </div>
                <div className="navbar-navegador-contenedor">
                    <button className="nav-contenedor">Contactos</button>
                    <CartWidget/>
                </div>
            </div> 
        </nav>
        
    );
};

export default NavBar;