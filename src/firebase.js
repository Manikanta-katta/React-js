
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getAuth, GoogleAuthProvider, signInWithPopup, FacebookAuthProvider } from 'firebase/auth';
import {useState,useEffect} from 'react';
import { onAuthStateChanged } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyADZ2jRCwQ7kbTggX6UERCn9ihhULsZxgk",
    authDomain: "react-register-50890.firebaseapp.com",
    projectId: "react-register-50890",
    storageBucket: "react-register-50890.appspot.com",
    messagingSenderId: "608875526497",
    appId: "1:608875526497:web:ebc6bbfb8e59e0ae48ad20"
};
// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();



export const ath = getAuth(firebaseApp);

const provider = new GoogleAuthProvider()
export const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
        console.log(result);
    })
        .catch((error) => {
            console.log(error);
        })
};
const fprovider = new FacebookAuthProvider()
export const sigInWithFacebook = () => {
    signInWithPopup(auth, fprovider).then((result) => {
        console.log(result);
    })
        .catch((error) => {
            console.log(error);
        })
};
export function useAuth(){
    const [currentUser,setcurrentUser] = useState();
    useEffect(() => {
      const unsub = onAuthStateChanged(auth,(user) => setcurrentUser(user))
      return unsub
    },[]);
    return currentUser;
   }

export { firebaseApp };