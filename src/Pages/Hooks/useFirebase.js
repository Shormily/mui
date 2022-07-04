import { useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  signInWithPopup,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
} from "firebase/auth";
import initializeFirebase from "../Firebase/Firebase.init";

// initialize firebase app
initializeFirebase();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [authError, setAuthError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

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
  const registerUser = (email, password) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        // setUser(result.user);
        setAuthError('')
        // ...
      })
      .catch((error) => {
       setAuthError('')
      })
      .finally(() => setIsLoading(false));
  };
  const loginUser = (email, password) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
      })
      .catch((error) => {
        setAuthError('')
      })
      .finally(() => setIsLoading(false));
  };
  // Observe user state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // setUser(user);
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribe;
  });

  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUser({ user });
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  return {
    user,
    isLoading,
    error,
    logOut,
    signInUsingGoogle,
    loginUser,
    registerUser
  };
};

export default useFirebase;
