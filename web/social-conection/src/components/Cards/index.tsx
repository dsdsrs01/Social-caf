import styles from './cards.module.css'

export function Card() {
    return (
        <div className={styles.BoxCard}>
            <div className={styles.content}>
                <p className={styles.SubTitulo}>113-45-1</p>
                <h1 className={styles.title}>Ritalina</h1>
                <p className={styles.SubTitulo}>Quantidade: <span>10</span></p>
                <div className={styles.BoxButtons}>
                    <button>Editar</button>
                    
                </div>
            </div>
        </div>
    )
}