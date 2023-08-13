import { useContext, FormEvent, useState } from 'react' //Usar o contexto em qual quer lugar
import styles from './auth.module.css'

import person from '../../assets/person.svg'
import olho from '../../assets/Group-218.svg'

import { AuthContext } from '../../context/AuthContext'

export function Auth() {
    const { signIn } = useContext(AuthContext);
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [loading, setLoading] = useState(false)

    async function handleLogin(event: FormEvent) {
        event.preventDefault(); // Não atualizar a pagina

        let data = {
            email,
            password
        }

        await signIn(data)
    }

    return (
        <main className={styles.main}>
            <div className={styles.logo}>
                <h1>Connection</h1>
                <h1>Caf</h1>
            </div>

            <form onSubmit={handleLogin}>
                <div className={styles.Boxinput}>
                    <img className={styles.img1} src={person}/>
                    <input 
                        className={styles.input} 
                        placeholder='Email' 
                        type="text" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <img className={styles.img2} src={olho}/>
                    <input 
                        className={styles.input} 
                        placeholder='Password' 
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                </div>

                <div className={styles.BoxButton}>
                    <button className={styles.button}>Entrar</button>
                </div>       
            </form>
        </main>
    )
}