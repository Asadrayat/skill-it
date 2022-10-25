import React from 'react';
import { createContext } from 'react';
import { getAuth, signInWithPopup } from 'firebase/auth';
import app from '../../Component/Hook/firebaseConfig';
const auth = getAuth(app);

export const AuthContext = createContext();
const Authprovider = ({ children }) => {
    const user = { displayName: 'Natasha' };
    const providerLogin = (provider) => {
        return signInWithPopup(auth,provider)
    }
    const authInfo = { user ,providerLogin };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;