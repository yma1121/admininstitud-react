import React, { useState } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './menu.css';
import Rutas from '../Rutas';

export default function Menu() {

    const [active, setActive] = useState('');


    return (

        <Router>
            <div>
                <nav className="menu">
                    <div style={{ display: 'inline-block' }}>
                        <a href="index.html">
                            <img className="img-logo" src={require('./../../../resources/img/logo.jpeg')} alt />
                        </a>
                    </div>
                    <ul>
                        <li><a href="#"><Link to="/login">Login</Link></a></li>
                        <li><a className={active == 'login' ? 'active' : ''} onClick={() => setActive('login')} >
                            <Link to='/login'>Pagos</Link></a></li>
                        <li><a className={active === 'contactenos' ? 'active' : ''} onClick={() => setActive('contactenos')}>
                            <Link to='/contactenos'>Contactenos</Link></a></li>
                        <li><a className={active === 'nosotros' ? 'active' : ''} onClick={() => setActive('nosotros')}>
                            <Link to='/nosotros'>Nosotros</Link></a></li>
                        <li><a className={active === 'registro' ? 'active' : ''} onClick={() => setActive('registro')}>
                            <Link to='/registro'>Registro</Link></a></li>
                    </ul>
                </nav>
                <Rutas />
            </div>
        </Router >
    )
}