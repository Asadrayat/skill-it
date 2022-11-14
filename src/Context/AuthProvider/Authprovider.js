import React from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import app from '../../Component/Hook/firebaseConfig';
import { useState } from 'react';
import { useEffect } from 'react';
const auth = getAuth(app);

export const AuthContext = createContext();
const Authprovider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading,setLoading] = useState(true);
    const providerLogin = (provider) => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }
    const logout = () => {
        setLoading(true)
        return signOut(auth)
    }
    const createUser = (email, password, displayName, photoURL) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password, displayName,photoURL);
    }
    const signIn = (email, password, name) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password, name);

    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('user inside state changed', currentUser);
            setUser(currentUser)
            setLoading(false)
        });
        return () => {
            unsubscribe();
        }
    }, [])
    const authInfo = { user, providerLogin, logout, createUser, signIn, loading };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;