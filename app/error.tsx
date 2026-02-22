'use client'

import styles from './error.module.css'
import logger from "./api/client/logger";
import Header from './(home)/header/header';
import HeaderAnimation from './(home)/header/header_animation';

export default function Error({ error }: { error: Error & { digest?: string }, reset: () => void }) {
    logger.error(error);

    return <>
        <HeaderAnimation small />

        <Header>
            <div className={styles.content}>
                <p>Something went wrong!</p>
            </div>

            <div className={styles.buttons}>
                {/* <Button content='Go Home' link='/' size='standard' /> */}
                <span style={{ display: 'inline', marginLeft: '40px' }} />
                {/* <Button content='Try again' action={() => reset()} size='standard' /> */}
            </div>
        </Header>
    </>
}