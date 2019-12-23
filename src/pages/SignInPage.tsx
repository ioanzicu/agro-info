import React, { useState, FormEvent, useEffect } from "react";
import Navbar from "../components/Navbar";
import { LANDING } from "../constants/routes";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDYrJmh27suJ0gm5AxojLK9gGVQ-Oa_VAI",
  authDomain: "agro-info-262516.firebaseapp.com",
  databaseURL: "https://agro-info-262516.firebaseio.com",
  projectId: "agro-info-262516",
  storageBucket: "agro-info-262516.appspot.com",
  messagingSenderId: "1080129383052",
  appId: "1:1080129383052:web:35e8de688849fef89de9a9"
};

firebase.initializeApp(firebaseConfig);

const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: "popup",
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: LANDING,
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID
  ]
};

const SignIn = (props: any) => {
  useEffect(() => {
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged(
      user => {
        if (user) {
          const displayName = user.displayName;
          const email = user.email;
          const emailVerified = user.emailVerified;
          const photoURL = user.photoURL;
          const uid = user.uid;
          const phoneNumber = user.phoneNumber;
          const providerData = user.providerData;
          user.getIdToken().then((accessToken: any) => {
            window.localStorage.setItem("token", accessToken);
            props.setUserData({
              displayName,
              email,
              emailVerified,
              phoneNumber,
              photoURL,
              uid,
              accessToken,
              providerData
            });
          }, null);
        } else {
          console.log("something is not ok");
        }
        console.log("user", user);
      },
      (error: any) => console.log("error", error)
    );
    return () => unregisterAuthObserver();
  }, []);

  return (
    <div>
      <p>Please sign-in:</p>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </div>
  );
};

export default SignIn;
