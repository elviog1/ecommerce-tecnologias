import React from 'react'
import ph from '../../../../Imágenes/Emmeliel.jpg'
import Google from '../svgComponents/Google'
import Linkedin from '../svgComponents/Linkedin'
import Facebook from '../svgComponents/Facebook'
import x from './Login.module.css';
const Login = () => {
  return (
    <div className="h-screen grid grid-cols-2">

    <div className={x.left_side}>
      <div className={x.logo}>
        <span>logo</span>
      </div>

      <div className={x.wel}>
        <p>Bienvenido</p>
        <h5>Puede Iniciar Sesion</h5>
      </div>


      <div className={x.allMail}>
        <p>Email</p>
        <div>
          <div className={x.allMailInput}>
            <input type='text' placeholder='email@example.com' />
            <i>x</i>
          </div>
        </div>

        <p>Contraseña</p>
        <div>
          <div className={x.allMailInput}>
            <input type='password' placeholder='yourPassword.1234' />
            <i>x</i>
          </div>
        </div>

        <div className={x.check}>
          <div className={x.remember}>
            <div className={x.checkbox}><input type='checkbox' /></div>
            <label htmlFor="">Recordar Contraseña</label>
          </div>
          <p>¿Olvidaste la contraseña?</p>
        </div>

        <button className={x.continuar}>Iniciar Sesion</button>
      </div>

      <div className={x.separador}>
        <div></div>
        <p>Ó</p>
        <div></div>
      </div>

      <ul className={x.social}>
        <li><Google /></li>
        <li><Facebook /></li>
        <li><Linkedin /></li>
      </ul>
      <p className={x.registro}>¿No tienes una cuenta? <span>Registrame</span></p>


    </div>

    <div className={x.right_side}>
      <p className={x.text}>Lorem Ipsum</p>

    </div>
  </div>
  )
}

export default Login
