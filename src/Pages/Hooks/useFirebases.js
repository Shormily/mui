import { useEffect, useState } from "react"
import inisilizeAuthentication from "../Firebase/Firebase.init"
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut, createUserWithEmailAndPassword } from "firebase/auth";
import swal from "sweetalert";

inisilizeAuthentication();
const useFirebases = () =>{
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
   
    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider();
    
    const createNewUserByEmail = ( email, password) => {
        createUserWithEmailAndPassword( email, password)
          .then((result) => {
            setUser(result.user);
          })
          .catch((error) => {
            setError(error.message);
          });
      };
    
    
      
     
    const signInUsingGoogle = (location,history) =>{
        setIsLoading(true)
       signInWithPopup(auth, googleProvider )
       .then(result =>{
        //    console.log(result.user);
           const distination = location?.state?.from || '/';
           console.log(distination)
           history.replace(distination);
           
           swal({
            title: "Successfully Sign In!!",
            icon: "success",
          });
         
          
       })
       .catch(error =>{
        swal({
            text: error.message,
            icon: "error",
          });
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
        createNewUserByEmail,
        // isLoading,
        authError,
        setIsLoading
    }
}

export default useFirebases;