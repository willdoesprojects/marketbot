import React, { useState } from "react";
import logo from './logo.PNG';
import './SignIn.css';
import loginData from '../LoginData.json';
import { useNavigate } from 'react-router-dom';



function SignIn({ onLogin, userId, setUserId  }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    

    const handleSubmit = (event) => {
      event.preventDefault();
      // Search for the user's email and password in the loginData array
      const user = loginData.find(
        (user) => user.email === email && user.password === password
      );
  
      if (user) {
        console.log('User logged in successfully');
        onLogin();
        setUserId(user.id);
        console.log(user.id);
        console.log(password);
        navigate('/');
      } else {
        console.log('Incorrect email or password');
      }
    };
    
    return (
        <div>
            <br />
            <div className="imageLogo mx-auto">
                <img src={logo} />
            </div>
            <br />
            <h1 className="text-center text-[30px]">Welcome to Marketbot!</h1>
            <br />
            <p className="text-center">To get started, please sign into your Marketbot Account</p>

            <form onSubmit={handleSubmit}>
                <br />

                <div className="form-group w-1/4 mx-auto">
                    <input type="email" className="form-control" id="emailInput" aria-describedby="emailHelp" placeholder="Email Address" value={email} onChange={e => setEmail(e.target.value)} />
                </div>

                <br />

                <div className="form-group w-1/4 mx-auto">
                    <input type="password" className="form-control" id="passwordInput" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                </div>

                <br />

                <br />

                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-auto block">Sign In</button>

                <div className="create">
                    <p>Don't have a Marketbot Account?
                        <div className="links">
                            <a id="signup" href="./SignUp">Create an Account</a>
                            <br />
                            <a id="forgotpass">Forgot your password?</a>
                        </div>
                    </p>
                </div>

            </form>

           
        </div>
    );
}

export default SignIn;
