import React, { useState } from "react";
import "../Login/Login.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
const Login = () => {

    const history = useNavigate()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const register = e => {
        e.preventDefault()

        auth.createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            console.log(auth)
            alert("You account have been created")
            if(auth) {
              history('/')
            }
        })
        .catch(error => {alert(error.message)})
    }
    const signIn = e => {
        e.preventDefault() 
        auth.signInWithEmailAndPassword(email, password)
          .then(auth => {
          history('/')
        })
        .catch(error => {alert(error.message)})
    }
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG1.png"
        />
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>

        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            onClick={signIn}
            className="login__signInButton"
          >
            Sign In
          </button>
        </form>

        <p>
            By continuing, you agree to Amazon's <span>Conditions of Use</span> and <span>Privacy Notice.</span>
        </p>
        <button onClick={register} className='login__registerButton'>Create your Amazon Account</button>
      </div>
    </div>
  );
};

export default Login;
