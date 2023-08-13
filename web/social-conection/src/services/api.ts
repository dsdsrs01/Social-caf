import axios, { AxiosError } from "axios"
import { parseCookies } from 'nookies'

import { AuthTokenError } from './errors/AuthTokenError'

//import { signOut } from '../context/AuthContext'

export function setupApiClient(context = undefined) {
    let cookies = parseCookies(context)

    const api = axios.create({
        baseURL: 'http://localhost:3333',
        headers: {
            Authorization: `Bearer ${cookies['@nextauth.token']}`
        }
    })

    api.interceptors.response.use(response => {
        return response;
    }, (error: AxiosError) => {
        if(error.response?.status === 401) {
            if(typeof window !== undefined) {
                // Chama a funcao para deslogar o usuario
                //signOut();
            }else {
                return Promise.reject(new AuthTokenError())
            }
        }

        return Promise.reject(error)
    })

    return api;
}