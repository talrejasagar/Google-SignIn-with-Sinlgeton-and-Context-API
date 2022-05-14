import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { useState } from "react";
import { firebaseConfig } from "./firebase";

let app = null;
let auth = null;
export const init = () => {
  app = initializeApp(firebaseConfig);
  auth = getAuth();
};

export const provider = new GoogleAuthProvider();

export const GSignIn = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    return result.user;
  } catch {
    (error) => {
      console.log(error);
      return error;
    };
  }
};

export const logOut = () => {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
    })
    .catch((error) => {
      // An error happened.
    });
};

export const getUserState = async () => {
  return new Promise((resolve, reject) => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        resolve(user);
      } else {
        // User is signed out
        resolve(null);
      }
    });
  });
};
