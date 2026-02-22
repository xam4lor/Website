import styles from './separator.module.css';

export default function Separator() {
    return <>
        <div className={styles.separator}>
            <div className={styles.circle} />
            <div className={styles.circle} />
            <div className={styles.line} />
        </div>
    </>
}