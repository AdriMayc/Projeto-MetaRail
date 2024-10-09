import { useEffect, useState } from "react";
import auth from './firebase';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    GoogleAuthProvider, 
    signInWithPopup,
    signInWithRedirect,
    fetchSignInMethodsForEmail
} from "firebase/auth";
import { link } from 'react-router-dom';

function Cadastro() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [user, setUser ] = useState(false);
    const [userDetail, setUserDetail] = useState(Object);
    const provider = new GoogleAuthProvider();

    // Verificando se o usuário está logado
    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            if(currentUser) {
                setUser(true);
                setUserDetail({currentUser});
            } else {
                setUser(false);
            }
        })
    }, []);

     //Cadastro do Usuário com email e senha
     async function newUser() {
        await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            alert("Cadastro feito com sucesso");

            let userCredential = userCredential.user;

            setUser(true);
            setEmail("");
            setPassword("");
        })
        .catch((erro) => {
            alert("Erro no cadastro do usuário");
            console.log(erro);
        })
     }

    async function GoogleAuth() {
        await signInWithPopup(auth, provider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
        }) 
        .catch((error) => {
            alert("Erro no cadastro via google");
            console.log(error);

            //Caso de uso a conta já existe
            if(error.code === "auth/account-exists-with-different-credential") {
                let credential = error.credential;
                let email = error.email;

                fetchSignInMethodsForEmail(email, credential)
                .then((methodes) => {
                    if(methodes[0] === 'password') {
                        signInWithEmailAndPassword(auth, email, password)
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

    // Cadastro com o Google via redirects
    async function GoogleRedirect() {
        await signInWithRedirect(auth, provider);
    }

    // LogOut do usuário
    async function userLogOut() {
        await signOut(auth)
        .then(() => {
            alert("Sucesso ao sair da conta");
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

export default Cadastro;
