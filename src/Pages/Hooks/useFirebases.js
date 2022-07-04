import { useEffect, useState } from "react"
import inisilizeAuthentication from "../Firebase/Firebase.init"
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut, createUserWithEmailAndPassword } from "firebase/auth";
import { useHistory } from "react-router-dom";

inisilizeAuthentication();
const useFirebases = () =>{
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const history = useHistory();
    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider();
    


    const registerNewUser = (email,password)=>{
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential)=>{
            const user =userCredential.user;
          
            console.log(user)
           
        })
        .catch((error) =>{
        //  const errorCode = error.code;
         setAuthError(error.message)
        })
        .finally(() => setIsLoading(false));
      }
    const signInUsingGoogle = (location,history) =>{
        setIsLoading(true)
       signInWithPopup(auth, googleProvider)
       .then(result =>{
           console.log(result.user);
           setUser(result.user);
           history.push('/')
       })
       .catch(error =>{
        setAuthError(error.message)
       })
       .finally(() => setIsLoading(false));
    }

    const logout = () =>{
        signOut(auth)
        .then(() =>{
            setUser({user});
        })
        .catch(error =>{
            setAuthError(error.message)
           })
           .finally(() => setIsLoading(false));
    }

    useEffect( () =>{
        onAuthStateChanged(auth, user=>{
            if (user) {
                console.log('inside state change', user);
                setUser(user);
            }
        })
    })


    return{
        user,
        error,
        signInUsingGoogle,
        logout,
        registerNewUser,
        // isLoading,
        authError,
        setIsLoading
    }
}

export default useFirebases;