import { useState } from 'react';
import './Login.css'
import { useNavigate } from "react-router-dom";
import { useRef } from 'react';


function TelaDeLogin() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  const navigate = useNavigate();

const handleTelaHome = () =>{
  navigate('/TelaHome')
}

const handleTelaRegistro = () =>{
  navigate('/TelaRegistro')
}



  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form action="" className="login-form">

            <span className="login-form-title">Login</span>

            <span className="login-form-title">
            </span>

            <div className="wrap-input">
              <input className={email !== "" ? 'has-val input' : 'input'}
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}>
              </input>
              <span className="focus-input" data-placeholder="Email"></span>
            </div>

            <div className="wrap-input">
              <input className={password !== "" ? 'has-val input' : 'input'}
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}>
              </input>
              <span className="focus-input" data-placeholder="Password"></span>
            </div>

            <div className="container-login-form-btn">
              <button className="login-form-btn" onClick={handleTelaHome}>Login</button>
            </div>

            <div className="text-center">
              <span className="txt1">Não possui conta</span>
              <a onClick={handleTelaRegistro}>Criar conta</a>
            </div>


          </form>
        </div>
      </div>
    </div>

  );
}


export default TelaDeLogin