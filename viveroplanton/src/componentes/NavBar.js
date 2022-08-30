import logo from '../plantago.png';

const NavBar = () => {
    return (
        <div className="navbar-contenedor">
            <div className="navbar-imagen-contenedor">
                <img className="App-logo" src={logo} alt="logo" />
            </div>
            <div className="navbar-navegador-link">
                <a class="nav-link" href="#">Macetas</a>
                <a class="nav-link" href="#">Plantas</a>
                <a class="nav-link" href="#">Servicios</a>
            </div>
            <div className="navbar-navegador-contenedor">
                <button class="nav-contenedor">Carrito</button>
                <button class="nav-contenedor">Registrarse</button>
                <button class="nav-contenedor">Contactos</button>
            </div>
        </div> 
    );
};

export default NavBar;