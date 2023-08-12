import { NavLink } from 'react-router-dom'
import { SignOut } from "phosphor-react"

import styles from './header.module.css'


export function Header() {
    return(
        <header className={styles.headerContainer}>
            <div className={styles.logo}>
                <h1>Connection</h1>
                <h1>Caf</h1>
            </div>
            <nav className={styles.navHeader}>
                <NavLink className={styles.a} to="/" title="Home">
                    <SignOut size={24}/>
                </NavLink>
            </nav>
        </header>
    )
}