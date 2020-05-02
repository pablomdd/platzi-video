import React from 'react';
import '../assets/styles/components/Header.scss';
// import logo from '../assets/static/logo-platzi-video-BW2.png';
// import userIcon from '../assets/static/user-icon.png';

const Header = () => (
  <header className="header">
    <img className="header__img" src = "../assets/static/logo-platzi-video-BW2.png" alt="Platzi Video" />
    <div className="header__menu">
      <div className="header__menu--profile">
        <img src="../assets/static/user-icon.png" alt="" />
        <p>Perfil</p>
      </div>
      <ul>
        <li><a href="/">Cuenta</a></li>
        <li><a href="/">Cerrar Sesión</a></li>
      </ul>
    </div>
  </header>
);

export default Header;