import { NavLink } from 'react-router-dom'
import styles from './auth.module.css'

import person from '../../assets/person.svg'
import olho from '../../assets/Group-218.svg'

export function Auth() {
    return (
        <main className={styles.main}>
            <div className={styles.logo}>
                <h1>Connection</h1>
                <h1>Caf</h1>
            </div>

            <form action="">
                <div className={styles.Boxinput}>
                    <img className={styles.img1} src={person}/>
                    <input className={styles.input} placeholder='Usuario' type="text" />
                    <img className={styles.img2} src={olho}/>
                    <input className={styles.input} placeholder='Password' type="password" />
                </div>

                <div className={styles.BoxButton}>
                    <NavLink to='/home' className={styles.button}>Entrar</NavLink>
                </div>       
            </form>
        </main>
    )
}