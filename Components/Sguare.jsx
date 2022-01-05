import styles from './Sguare.module.css'

export const Sguare = () => (
    <div>
        <div className={styles.sguareClass}>
            <div className={styles.boxFlex} style={{ backgroundColor: 'red' }}></div>
            <div className={styles.boxFlex} style={{ backgroundColor: 'green' }}></div>
            <div className={styles.boxFlex} style={{ backgroundColor: 'black' }}></div>
            <div className={styles.boxFlex} style={{ backgroundColor: 'tomato' }}></div>
            <div className={styles.boxFlex} style={{ backgroundColor: 'orange' }}></div>
        </div>
    </div>
)
