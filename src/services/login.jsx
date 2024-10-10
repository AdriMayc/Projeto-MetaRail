import { useState, useEffect } from 'react';
import { auth } from './firebase';
import {
    signInWithEmailAndPassword,
    sign,
    onAuthStateChanged,
    signInWithPopup,
    fetchSignInMethodsForEmail
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

    // Login do Usuário com e-mail e senha 
    async function userLogin() {
        // value: detalhes do usuário que foi logado
        await signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            alert("Login do usuário feito com sucesso");

            setEmail("");
            setPassword("");
        })
        .catch((error) => {
            alert("Por favor, insira as informações corretas ou crie uma conta");
            console.log(error);
        })
    }

    // Logar com Google (popup)
    async function GoogleAuth() {
        await signInWithPopup(auth, provider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
        })
        .catch((error) => {
            alert("Erro no login via google do usuário");
            console.log(error);

            // Caso de uso a conta já existe
            if(error.code === "auth/account-exists-with-different-credential") {
                let credential = error.credential;
                let email = error.email;
                
                fetchSignInMethodsForEmail(email, credential)
                .then((methodes) => {
                    if(methodes[0] === "password") {
                        SignInWithEmailAndPassword(auth, email, password)
                        .then((result) => {
                            return result;
                        });
                        return;
                    }
                })
                .catch((error) => {
                    alert("Erro");
                    console.log(error);
                })
            }
        })
    }

    // Logando com o Google via redirect
    async function googleRedirect() {
        await signInWithRedirect(auth, provider);
    }

    // LogOut do Usuário

    async function userLogOut() {
        await signOut(auth)
        .then(() => {
            alert("Sessão finalizada com sucesso");
            setUser(false);
        })
        .catch((error) => {
            alert("Erro ao sair da conta");
            console.log(error);
        })
    }

    return(
        <div>

        </div>
    )
}

export default login;