import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeFirebase from "../firebase/firebase.init";

initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState({});
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
        createUserWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                setUser(userCredential.user);
                updateProfile(auth.currentUser, {
                    displayName: name
                })
                    .then(() => {
                        setError({});
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
                setError({});
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
            })
            .catch(err => {
                setError(err);
            })
            .finally(() => setIsLoading(false))
    }

    // console.log(email, name, password, "from Firebase");

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