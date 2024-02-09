import * as React from 'react';
import './Landing.css';

export default function Landing() {
    return (
        <div>
        <div>
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel" >
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="./images/landing/Slide1.PNG" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="./images/landing/Slide2.PNG" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="./images/landing/Slide3.PNG" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="./images/landing/Slide4.PNG" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="./images/landing/Slide5.PNG" className="d-block w-100" alt="..." />
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <h4>En Pawsitive vibes creemos que el amor es recíproco, por eso nos esforzamos para ayudarte a regresarles un poco del amor que ellos te dan. Spread love and Pawsitive Vibes.</h4>
        </div>
        <div class="row g-2">
        <div class="col-sm">
          <div class="categorias container-fluid">  
          <div class="imagen-categorias">
              <h6>Gatos</h6>
              <a href="./productos.html#gatos"><img src="https://comunidad.retorn.com/wp-content/uploads/cache/2018/09/gatitos/3008811440.jpg" alt=""/></a>
            </div>
            <div class="imagen-categorias">
              <h6>Perros</h6>
              <a href="./productos.html#perros"><img src="https://pawal.cl/modules/ph_simpleblog/covers/9.jpg" alt=""/></a>
            </div>
            <div class="imagen-categorias">
              <h6>Peces</h6>
              <a href="./productos.html#peces"><img src="https://todopez.es/wp-content/uploads/2023/04/cuantos-goldfish-puedo-tener-en-50-litros.jpg" alt=""/></a>
            </div>
            <div class="imagen-categorias">
              <h6>Aves</h6>
              <a href="./productos.html#aves"><img src="https://i.pinimg.com/1200x/fb/30/42/fb3042cb712ba9599dd2acbad4083769.jpg" alt=""/></a>
            </div>
          </div>
        </div>
      </div>
      <div class="beneficios container-fluid">
        <ul>
          <li>
          <i class="bi bi-truck"></i>
          <h6>Entregas el mismo día</h6>
          <p>No esperes por tus compras</p>
          </li>
          <li>
            <i class="bi bi-shield-check"></i>
            <h6>Compras protegidas</h6>
            <p>Seguridad en todas tus compras</p>
          </li>
          <li>
            <i class="bi bi-shop"></i>
            <h6>Horarios flexibles</h6>
            <p>Lo que necesitas cuando lo necesitas</p>
          </li>
        </ul>
      </div>
      <br/>
      <div class="cliente container-fluid">
      <p>" En Pawsitive Vibes encuentro todo lo que le gusta. Nunca lo había visto tan feliz y verlo feliz me hace feliz a mí " - María Cantú</p>
      </div>
        </div>
        
    )
}