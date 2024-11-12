import styles from './PreLoader.module.css';

export default function PreLoader({percentage}) {
    return(
        <div className= {styles.preloaderWrapper}>
            <div className={styles.preloaderContainer}>
                <div className={styles.preloaderFill} style={{'--value': percentage}}></div>
            </div>
            <div className={styles.text}>loadinggg..... {percentage}</div>
        </div>
    );
}