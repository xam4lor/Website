import styles from './footer.module.css'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.transition}></div>

            <div className={styles.content}>
                <div className={styles.footerContent}>
                    <div className={styles.endText}>
                        <p>©{new Date().getFullYear()} ExplorableScience</p>
                        <p className={styles.separator}>|</p>
                        <p><a href="mailto:explorablesci@gmail.com">explorablesci@gmail.com</a></p>
                        <p className={styles.separator}>|</p>
                        <p>Version 5.0</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
