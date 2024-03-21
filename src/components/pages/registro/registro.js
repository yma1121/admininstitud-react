import React, { useState, useEffect } from 'react';

export default function Login() {

    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [institucion, setInstitucion] = useState('');
    const [email, setEmail] = useState('');
    const [cedula, setCedula] = useState('');

    // Post with fetchAPI
    const registrar = async () => {
        let response = await fetch('http://localhost:8080/api/registro', {
            method: 'POST',
            body: JSON.stringify({
                institucion: institucion,
                email: email,
                numeroDocumento: cedula,
                persona: {
                    nombre: nombre,
                    apellido: apellido,
                }
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }).then(res => res.json()).then(data => {
            console.log(data);
            alert("Restro completado satisfactoriamente")
        }).catch(err => {
            console.log(err);
            alert("Error De usaurio y contraseña")
        });

    };
    return (
        <div class="registro">
            <h2 class="tittle-login">Registro</h2>
            <div class="imgcontainer">
                <img src={require('./../../../resources/img/registro-icon.png')} alt="Avatar" className="avatar" />
            </div>

            <form class="login-form" action="/action_page.php" method="post">
                <div class="container">
                    <label for="nombre"><b>Nombre</b></label>
                    <input type="text" placeholder="Enter Nombre" name="nombre" required
                        value={nombre} onChange={(e) => setNombre(e.target.value)} />

                    <label for="apellido"><b>Apellido</b></label>
                    <input type="text" placeholder="Enter Apellido" name="apellido" required
                        value={apellido} onChange={(e) => setApellido(e.target.value)} />


                    <label for="cedula"><b>Cedula / Nit</b></label>
                    <input type="text" placeholder="Enter Cedula / Nit" name="cedula" required
                        value={cedula} onChange={(e) => setCedula(e.target.value)} />


                    <label for="institucion"><b>Institucion</b></label>
                    <input type="text" placeholder="Enter Institucion" name="institucion" required
                        value={institucion} onChange={(e) => setInstitucion(e.target.value)} />


                    <label for="email"><b>Email</b></label>
                    <input type="text" placeholder="Enter Email contacto" name="email" required
                        value={email} onChange={(e) => setEmail(e.target.value)} />


                    <button type="button" onClick={() => registrar()}>Registro</button>
                </div>
            </form>
        </div>
    )
}