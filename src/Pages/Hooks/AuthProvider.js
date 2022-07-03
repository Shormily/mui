import React, { createContext } from 'react';
import useFirebases from './useFirebases';


export const AuthContext = createContext(null);
const AuthProvider = ({childern}) => {
    const allContexts = useFirebases()
    return (
       
          <AuthContext.Provider value={allContexts}>
            {childern}
        </AuthContext.Provider> 
       
    );
};

export default AuthProvider;