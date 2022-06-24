
import React, { useEffect } from 'react';
import { useState } from 'react';
import { firebaseApp } from './firebase';
import Login from './components/Login';
import Logout from './components/Logout';

import './App.css';



const App = () => {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [PassswordError, setPasswordError] = useState('');
  const [hasAccount, setHasAccount] = useState(false);


  const clearInputs = () => {
    setEmail('');
    setPassword('');
  }
  const clearErrors = () => {
    setEmailError('');
    setPasswordError('');
  }

  const handlelogin = () => {
    clearErrors();
    firebaseApp.auth().signInWithEmailAndPassword(email, password)
      .catch((err) => {

        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
      });
  };
  const handleSignup = () => {
    clearErrors();
    firebaseApp.auth().createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":

            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
        }
      });
  }
  const handlelogout = () => {
    firebaseApp.auth().signOut();
  };
  const authlistener = () => {
    firebaseApp.auth().onAuthStateChanged(user => {
      if (user) {
        clearInputs();
        setUser(user);
      }
      else {
        setUser("");
      }
    });
  };
  useEffect(() => {
    authlistener();
  }, []);


  return (
    <div className="App">
      {
        user ? (
          <Logout handlelogout={handlelogout} />
        )
          : (
            <Login
              usern={user}

              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
              handlelogin={handlelogin}
              handleSignup={handleSignup}
              hasAccount={hasAccount}
              setHasAccount={setHasAccount}
              emailError={emailError}
              PassswordError={PassswordError} />
          )


      };
    </div>
  )
}

export default App;