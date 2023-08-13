import styles from './cards.module.css'
import { PencilSimple, Trash } from 'phosphor-react'

export function Card() {
    return (
        <div className={styles.BoxCard}>
            <div className={styles.content}>
                <p className={styles.SubTitulo}>113-45-1</p>
                <h1 className={styles.title}>Ritalina</h1>
                <p className={styles.SubTitulo}>Quantidade: <span>10</span></p>
                <div className={styles.BoxButtons}>
                    <PencilSimple className={styles.pencil} size={15} />
                    <button className={styles.buttomEditar}>    
                        Editar
                    </button>
                    <Trash className={styles.trash} size={15} />
                    <button className={styles.buttomDeletar}>    
                        Deletar
                    </button>
                </div>
            </div>
        </div>
    )
}