import React, { useState, useEffect } from 'react';

export default function Login() {

    const [nombre, setNombre] = useState('');
    const [password, setPassword] = useState('');

    // Post with fetchAPI
    const loginUsuario = async () => {
        let response = await fetch('http://localhost:8080/api/login', {
            method: 'POST',
            body: JSON.stringify({
                nombre: nombre,
                password: password,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }).then(res => res.json()).then(data => {
            console.log(data);
            alert("Bienvenido" + data.persona.nombre + '' + data.persona.password)
        }).catch(err => {
            console.log(err);
            alert("Error De usaurio y contraseña")
        });

    };
    return (
        <div className="login">
            <h2 className="tittle-login">Login</h2>
            <div className="imgcontainer">
                <img src={require('../../../resources/img/login-icon.png')} alt="Avatar" className="avatar" />
            </div>
            <form className="login-form" method="post">
                <div className="container">
                    <label htmlFor="uname"><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" name="uname" required
                        value={nombre} onChange={(e) => setNombre(e.target.value)} />
                    <label htmlFor="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" required
                        value={password} onChange={(e) => setPassword(e.target.value)} />

                    <button type="button" onClick={() => loginUsuario()}>Login</button>

                    <label>
                        <input type="checkbox" defaultChecked="checked" name="remember" /> Remember me
                    </label>
                </div>
                <div className="container-buttom">
                    <button type="button" className="cancelbtn">Cancel</button>
                    <button type="button" className="forgotbtn">Forgot password?</button>
                </div>
            </form>
        </div>
    )
}