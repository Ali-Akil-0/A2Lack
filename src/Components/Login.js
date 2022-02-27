import { Button } from "@mui/material";
import React from "react";
import { auth, googleProvider } from "../firebase";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import {
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import "./Login.css";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const Login = () => {
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  // authentication and sing in with google
  const firebaseConfig = {
    apiKey: "AIzaSyDFMQph_CqxfUGiKM-PHJztP8CaglrAYqU",
    authDomain: "a2lack.firebaseapp.com",
    databaseURL:
      "https://a2lack-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "a2lack",
    storageBucket: "a2lack.appspot.com",
    messagingSenderId: "994701235189",
    appId: "1:994701235189:web:b7d478df76c08f16ed06bc",
    measurementId: "G-SKM71D1S7M",
  };

  // Initialize Firebase
  // const app = initializeApp(firebaseConfig);
  const [state, dispatch] = useStateValue();
  const auth = getAuth();
  auth.languageCode = "it";
  const provider = new GoogleAuthProvider();
  const signInWithGoogle = async () => {
    try {
      signInWithPopup(auth, provider).then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      });
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };
  const slackLogo =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Slack_Technologies_Logo.svg/220px-Slack_Technologies_Logo.svg.png";
  return (
    <div className="login">
      <div className="login__container">
        <img src={slackLogo} alt="" />
        <h1> Sign in to A2Lack</h1>
        <Button onClick={signInWithGoogle}>Sign in with Google</Button>
      </div>
    </div>
  );
};

export default Login;
