import React from 'react';
import { createContext } from 'react';
import { getAuth, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import app from '../../Component/Hook/firebaseConfig';
import { useState } from 'react';
import { useEffect } from 'react';
const auth = getAuth(app);

export const AuthContext = createContext();
const Authprovider = ({ children }) => {
    const [user, setUser] = useState(null);
    const providerLogin = (provider) => {
        return signInWithPopup(auth, provider)
    }
    const logout = () =>{
        return signOut(auth)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('user inside state changed', currentUser);
            setUser(currentUser)
        });
       return () =>{
        unsubscribe();
       }
    }, [])
    const authInfo = { user, providerLogin,logout };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;