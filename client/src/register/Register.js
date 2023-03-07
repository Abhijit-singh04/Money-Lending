import React from 'react'
import './register.css'
import bg from '../bg.svg'
import avtar from '../avatar.svg'
import wave from '../wave.png'

function Register() {
    return (
     <>
        <img class="wave" src={wave}></img>
            <div className="container">
                <div className="img">
                    <img src={bg} />
                </div>
                <div className="login-content">
                    <form >
                        <img src={avtar} />
                        <h2 className="title">Welcome</h2>
                        <div className="input-div one">
                            <div className="i">
                                <i className="fas fa-user"></i>
                            </div>
                            <div className="div">
                                <h5>Username</h5>
                                <input type="text" className="input " />
                            </div>
                        </div>
                        <div className="input-div pass">
                            <div className="i">
                                <i className="fas fa-lock"></i>
                            </div>
                            <div className="div">
                                <h5>Password</h5>
                                <input type="password" className="input" />
                            </div>
                        </div>
                        <a href="#">Forgot Password?</a>
                        <input type="submit" className="btn" value="Login"/>
                    </form>
                </div>
            </div>
            </>
            )
}

export default Register