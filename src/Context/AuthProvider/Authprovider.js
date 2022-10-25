import React from 'react';
import { createContext } from 'react';
export const AuthContext = createContext();
const Authprovider = ({ children }) => {
    const user = { displayName: 'Natasha' };
    const authInfo = { user };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;