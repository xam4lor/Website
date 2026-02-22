'use client'

import Header from './(home)/header/header'
import styles from './error.module.css'
import { inter } from './fonts'

export default function NotFound() {
    return <>
        <Header>
            <div className={`${styles.content} ${inter.className}`}>
                <p>Oops! This page wasn&apos;t found.</p>
            </div>

            <div className={styles.buttons}>
                {/* <Button content='Go Home' link='/' size='standard' /> */}
            </div>
        </Header>
    </>
}