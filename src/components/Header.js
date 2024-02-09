import * as React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
    const hideNavebar = () => {document.getElementById('navbarText').classList.remove('show')};

    return (
        <header>
            <nav className="navbar navbar-expand-xl">
                <div className="div-nav container-fluid">
                    <Link className="navbar-brand" to="/"><img id="logo" src="./images/logo.png" alt="" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className=" menu collapse navbar-collapse" id="navbarText">
                        <ul className="texto-nav navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="text nav-item mx-4 p-2">
                                <Link className="p-2 nav-link" to="/" aria-current onClick={hideNavebar}>Inicio</Link>
                            </li>
                            <li className="text nav-item mx-4 p-2">
                                <Link className="p-2 nav-link" to="/about" onClick={hideNavebar}>Nosotros</Link>
                            </li>
                            <li className="text nav-item mx-4 p-2">
                                <Link className="p-2 nav-link" to="/products" onClick={hideNavebar}>Productos</Link>
                            </li>
                            <li className="text nav-item mx-4 p-2">
                                <Link className="p-2 nav-link" to="/contact" onClick={hideNavebar}>Contáctanos</Link>
                            </li>
                        </ul>
                        <span className="iconos navbar-text d-flex flex-row-reverse">
                            <li className="nav-item">
                                <a className="nav-link active" href="./agregarProducto.html"><i className="bi bi-search"></i></a>
                            </li>
                            <li className="nav-item dropdown dropstart">
                                <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="bi bi-person" id="icono-cuenta"></i>
                                </a>
                                <ul className="dropdown-menu dropdown-menu-start">
                                    <li><Link className="dropdown-item" to="/register" onClick={hideNavebar}><button id="registrate">Regístrate</button></Link></li>
                                    <li><Link className="dropdown-item" to="/sign-in" onClick={hideNavebar}><button id="inicia-sesion">Inicia Sesión</button></Link></li>
                                </ul> </li>

                            <li className="nav-item">
                                <a className="nav-link active" href="./agregarProducto.html"><i className="bi bi-cart"></i></a>
                            </li>
                        </span>
                    </div>
                </div>
            </nav>
        </header>
    )

}

