import React, { useEffect, useState } from 'react'
import Google from '../svgComponents/Google'
import Linkedin from '../svgComponents/Linkedin'
import Facebook from '../svgComponents/Facebook'
import x from './Register.module.css';
import { BiHide, BiShowAlt } from "react-icons/bi";
const Register = () => {
    const [showPass, setShowPass] = useState(false);

    const [user, setUser] = useState({
        name: '',
        surname: '',
        username: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    };

    useEffect(() => {
        if (user.password.length < 1) {
            setShowPass(false)
        }
    }, [user.password]);


    const handleFetch = async (e) => {
        e.preventDefault();

        await fetch('http://localhost:8080/auth/login', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        }).then(e => e.json()).then(e => {
            localStorage.setItem('token', e.token)
        })

    }

    return (
        <div className="h-screen grid grid-cols-2">

            <div className={x.left_side}>
                <div className={x.logo}>
                    <span>logo</span>
                </div>

                <div className={x.wel}>
                    <p>Crear una cuenta</p>
                    <h5>Registrate para comprar productos</h5>
                </div>

                <form onSubmit={(e) => handleFetch(e)}>
                    <div className={x.allMail}>
                        <p>Nombre(s)</p>
                        <div>
                            <div className={x.allMailInput}>
                                <input onChange={(e) => handleChange(e)} type='text' placeholder='Mark' value={user.name} name='name' />
                                <i></i>
                            </div>
                        </div>

                        <p>Apellidos</p>
                        <div>
                            <div className={x.allMailInput}>
                                <input onChange={(e) => handleChange(e)} type='text' placeholder='Jackson' value={user.surname} name='surname' />
                                <i></i>
                            </div>
                        </div>

                        <p>Email</p>
                        <div>
                            <div className={x.allMailInput}>
                                <input onChange={(e) => handleChange(e)} type='text' placeholder='email@example.com' value={user.username} name='username' />
                                <i></i>
                            </div>
                        </div>

                        <p>Contrase??a</p>
                        <div>
                            <div className={x.allMailInput}>
                                <input onChange={(e) => handleChange(e)} type={showPass ? 'text' : 'password'} placeholder='yourPassword.1234' value={user.password} name='password' />
                                <div className={x.show} onClick={() => setShowPass(!showPass)}>
                                    {
                                        user.password < 1 ?
                                            null :
                                            showPass ?
                                                <BiShowAlt size={25} /> :
                                                <BiHide size={25} />
                                    }
                                </div>
                            </div>
                        </div>

                        <div className={x.check}>
                            <div className={x.checkbox}><input type='checkbox' /></div>
                            <p>Acepto los <span>terminos de servicio</span> y <span>politica de privacidad</span></p>
                        </div>

                        <button className={x.continuar}>Registrarme</button>
                    </div>
                </form>

                <div className={x.separador}>
                    <div></div>
                    <p className='select-none'>??</p>
                    <div></div>
                </div>

                <ul className={x.social}>
                    <li><Google /></li>
                    <li><Facebook /></li>
                    <li><Linkedin /></li>
                </ul>
                <p className={x.registro}>??Ya tienes una cuenta? <span>Entrar</span></p>


            </div>

            <div className={x.right_side}>
                <p className={x.text}>Lorem Ipsum</p>

            </div>
        </div>
    )
}

export default Register
