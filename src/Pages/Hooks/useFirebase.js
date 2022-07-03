import { useEffect, useState } from "react";
import {
  getAuth,
  // createUserWithEmailAndPassword,
  signOut,
  signInWithPopup,
  onAuthStateChanged,
  // signInWithEmailAndPassword,
  GoogleAuthProvider,
} from "firebase/auth";
import initializeFirebase from "../Firebase/Firebase.init";

// initialize firebase app
initializeFirebase();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const signInUsingGoogle = () => {
    // setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  // const registerUser = (email, password) => {
  //   createUserWithEmailAndPassword(auth, email, password)
  //     .then((userCredential) => {
  //       // Signed in
  //       // setUser(result.user);
  //       const user = userCredential.user;
  //       // ...
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       // setError(error.message);
  //     });
  // };
  // const loginUser = (email, password) => {
  //   signInWithEmailAndPassword(auth, email, password)
  //     .then((result) => {
  //       console.log(result.user);
  //       setUser(result.user);
  //     })
  //     .catch((error) => {
  //       // const errorCode = error.code;
  //       // const errorMessage = error.message;
  //       setError(error.message);
  //     });
  // };
  // Observe user state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // setUser(user);
        setUser(user);
      } else {
        setUser({});
      }
    });
    return () => unsubscribe;
  });

  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser({ user });
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return {
    user,
    error,
    logOut,
    signInUsingGoogle,
  };
};

export default useFirebase;
