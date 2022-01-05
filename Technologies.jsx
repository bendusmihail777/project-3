import styles from './Technologies.module.css'

export const Technologies = () => {
    return (
    <div>
        <ol className={`${styles.tecnologiesClass} ${styles.prokrutkaClass}`}>
            <li className={styles.technologiesClass}>text</li>
            <li className={styles.technologiesClass}>text</li>
            <li className={styles.technologiesClass}>text</li>
            <li className={styles.technologiesClass}>text</li>
            <li className={styles.technologiesClass}>text</li>
            <li className={styles.technologiesClass}>text</li>
        </ol>
    </div>
    )
}