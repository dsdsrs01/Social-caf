import { createContext, ReactNode, useState } from 'react'

import { destroyCookie } from 'nookies' // Deslogar o usuario
import Router from 'next/router'

type AuthContextData = {
    user: UserProps;
    isAuthenticated: boolean;
    signIn: (credentials: SignInProps) => Promise<void>;
    //signOut: () => void;
}

type SignInProps = { // Vai mandar o usuario e a senha pra logar
    email: string; // Usuário
    password: string;
}

type UserProps = {
    id: string;
    name: string;
    email: string;
}

type AuthProviderProps = {
    children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData)

//  export function signOut() {
//      try{
//          destroyCookie(undefined, '@nextauth.token')
//          Router.push('/')
//      }catch{
//          console.log('Erro ao logar!')
//      }
//  }

export function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState<UserProps>()
    const isAuthenticated = !!user; // Converte a variavel em boolean


    async function signIn({ email, password }: SignInProps){
        console.log("Email: ", email)
        console.log("Password: ", password)
    }

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
            {children}
        </AuthContext.Provider>
    )
}