
import React from 'react';
import './Login.css';
import App from '../App';
import { signInWithGoogle, sigInWithFacebook } from 'C:/Users/ManikantaKatta/Desktop/firebase/src/firebase.js';
const Login = (props) => {
    
    const {
        
        email,
        setEmail,
        password,
        setPassword,
        handlelogin,
        handleSignup,
        hasAccount,
        setHasAccount,
        emailError,
        PassswordError, } = props;
    
    return (
        <body>
            <section className='login'>
            
                <label>Email   :</label>&nbsp;
                <input id='txt' type="text" OutoFocus required value={email} onChange={e => setEmail(e.target.value)} />
                <p className="errorMsg">{emailError}</p>
                <label>Password :</label>
                <input id='txt' type="password" required value={password} onChange={e => setPassword(e.target.value)} />
                <p className="errorMsg">{PassswordError}</p>
                <div className="btnContainer">
                    {hasAccount ? (
                        <>
                            <button id="Btn" onClick={handlelogin}>Sign In</button>
                            <p>Don't have an account ?<span onClick={() => setHasAccount(!hasAccount)}>Sign Up</span></p>
                        </>
                    ) :
                        (
                            <>
                                <button id="Btn" onClick={handleSignup}>Sign Up</button>
                                <p>Have an account ?<span onClick={() => setHasAccount(!hasAccount)}>Sign In</span></p>
                            </>
                        )}
                </div>
                <button id='Btn2' onClick={signInWithGoogle} > Sign In Google</button><br />
                <button id='Btn2' onClick={sigInWithFacebook} > Sign In Facebook</button>
            </section>
        </body>
    )
}
export default Login;