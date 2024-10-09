import { useState, useEffect } from 'react';
import { auth } from './firebase';
import {
    signInWithEmailAndPassword,
    sign,
    onAuthStateChanged
} from 'firebase/auth';
import { Link } from 'react-router-dom';

function login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [user, setUser] = useState(false);
    const [userDetailt, setUserDetail] = useState(Object);
    const provider = new GoogleAuthProvider;

    // Verificar se o usuário está logado
    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            if(currentUser) {
                setUser(true);
                setUserDetail({ currentUser });
            } else {
                setUser(false);
            }
        })
    }, []);


    return(
        <div>

        </div>
    )
}

export default login;