import styles from './PreLoader.module.css';

export default function PreLoader({percentage}) {
    return(
        <div className={styles.preloaderContainer}>
            <div className={styles.preloaderFill}></div>
        </div>
    );
}