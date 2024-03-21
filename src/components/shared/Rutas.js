import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Inicio from '../pages/inicio/Inicio';
import Login from '../pages/login/Login';
import Registro from '../pages/registro/registro';

export default function Rutas() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/registro" element={<Registro />} />
      </Routes>
    </div>
  );
}

