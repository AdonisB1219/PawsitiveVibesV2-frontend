import * as React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="py-5">
            <div className="row" style={{marginRight:0}}>
                <div className="col-6 col-md-2 mb-3">
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-body-secondary"><img src="./images/logo.png" alt="" width="100px"/></Link></li>
                        <li className="nav-item mb-2">Síguenos en:</li>
                        <li className="nav-item mb-2">
                            <a href="#" className="nav-link p-0 text-body-secondary">
                                <i className="bi bi-tiktok"></i>
                                <i className="bi bi-instagram"></i>
                                <i className="bi bi-facebook"></i>
                                <i className="bi bi-twitter"></i></a></li>

                    </ul>
                </div>

                <div className="col-6 col-md-2 mb-3">
                    <h5>Menú</h5>
                    <ul className="nav flex-column">

                        <li className="nav-item mb-2"><a href="./index.html" className="nav-link p-0 text-body-secondary">Inicio</a></li>
                        <li className="nav-item mb-2"><a href="./nosotros.html" className="nav-link p-0 text-body-secondary">Nosotros</a></li>
                        <li className="nav-item mb-2"><a href="./productos.html" className="nav-link p-0 text-body-secondary">Productos</a></li>
                        <li className="nav-item mb-2"><a href="./contacto.html" className="nav-link p-0 text-body-secondary">Contáctanos</a></li>

                    </ul>
                </div>

                <div className="col-6 col-md-2 mb-3">
                    <h5>Categorías</h5>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2"><a href="./productos.html#perros" className="nav-link p-0 text-body-secondary">Perros</a></li>
                        <li className="nav-item mb-2"><a href="./productos.html#gatos" className="nav-link p-0 text-body-secondary">Gatos</a></li>
                        <li className="nav-item mb-2"><a href="./productos.html#aves" className="nav-link p-0 text-body-secondary">Aves</a></li>
                        <li className="nav-item mb-2"><a href="./productos.html#peces" className="nav-link p-0 text-body-secondary">Peces</a></li>

                    </ul>
                </div>

                <div className="col-6 col-md-2 mb-3">
                    <h5>Mi Cuenta</h5>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Carrito</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Mis pedidos</a></li>


                    </ul>
                </div>

                <div className="col-md-1">
                    <ul className="nav flex-row">
                        <Link className="nav-link active" to="/register"><li className="nav-item mb-2"><button id="registrate">Regístrate</button></li></Link>
                        <Link className="nav-link active" to="/signIn"><li className="nav-item mb-2"><button id="inicia-sesion">Inicia Sesión</button></li></Link>

                    </ul>
                </div>
            </div>
        </footer>
    )
}