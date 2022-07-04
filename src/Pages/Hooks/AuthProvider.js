import React, { createContext } from 'react';
import useFirebases from './useFirebases';


export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const allContexts = useFirebases()
    return (
       
          <AuthContext.Provider value={allContexts}>
            {children}
        </AuthContext.Provider> 
       
    );
};

export default AuthProvider;