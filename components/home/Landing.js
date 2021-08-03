import styles from '../../styles/Landing.module.scss';

// TODO: mais logo in the top right
export default function Landing() {
    return <>
        <div className={styles['background']}>
            <img src='/images/sky.png' alt='sky' className={styles['background__sky']}/>
            <img src='/images/clouds.png' alt='clouds' className={styles['background__clouds']}/>
        </div>
        <div className={`flex-container ${styles['content']}`}>
            <img src='/images/logo_big.png' alt='big logo' className={`mobile-hide ${styles['content__big-logo']}`} />
            <div className={`desktop-hide flex ${styles['content__small-logo-container']}`}>
                <img src='/images/logo_small.png' alt='small logo' className={styles['content__small-logo']}/>
            </div>
            <div className={styles['content__text']}>
                <p>Join Canada&apos;s 150+ brightest minds for a hackathon that will knock your socks off!</p>
                {/* TODO: apply button */}
            </div>
        </div>
    </>;
}