import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';
import Landing from './pages/Landing';
import Register from './pages/Register';
import SignIn from './pages/SignIn';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';

ReactDOM.render(
  <BrowserRouter>
  <Header />
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/about" element={<About />} />
        <Route
          path="/products"
          element={<Products />}
        />
      <Route
        path="/contact"
        element={<Contact />}
      />
      <Route path="/register" element={<Register />} />
      <Route path="/sign-in" element={<SignIn />} />

    </Routes>
    <Footer />
  </BrowserRouter>,
  document.getElementById("root")
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
