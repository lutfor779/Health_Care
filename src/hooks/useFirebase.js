import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeFirebase from "../firebase/firebase.init";

initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();

    const signInWithGoogle = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider)
            .finally(() => setIsLoading(false));
    }

    const emailPasswordLogin = () => {
        setIsLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
            .finally(() => setIsLoading(false));
    }

    const resister = (event) => {
        event.preventDefault();
        if (password.length < 6) {
            setError('Passwords should be 6 characters long');
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                setUser(userCredential.user);
                setError("");
                updateProfile(auth.currentUser, {
                    displayName: name
                })
                    .then(() => {
                        setError("");
                    })
                    .catch(err => {
                        setError(err.message)
                    })

            })
            .catch(err => {
                setError(err.message)
            })
            .finally(() => setIsLoading(false))
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                setError("");
            }
            else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribe;
    }, [auth])

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUser({});
                setError("")
            })
            .catch(err => {
                setError(err.message);
            })
            .finally(() => setIsLoading(false))
    }


    return {
        user,
        setUser,
        error,
        setError,
        email,
        setEmail,
        password,
        setPassword,
        name,
        setName,
        isLoading,
        signInWithGoogle,
        emailPasswordLogin,
        resister,
        logOut
    };
};

export default useFirebase;