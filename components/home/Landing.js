import styles from '../../styles/Landing.module.scss';
import Countdown from 'react-countdown';

// TODO: mais logo in the top right
export default function Landing() {

    const zeroify = (_num) => {
        const num = String(_num);
        return num.length === 1 ? `0${num}` : num;
    }

    return <>
        <div className={styles['background']}>
            <img src='/images/sky.png' alt='sky' className={styles['background__sky']} />
            {/* TODO: ideally, want the top and bottom content positioned relative to the clouds, not the entire backgorund div */}
            <img src='/images/clouds.png' alt='clouds' className={styles['background__clouds']}/>
        </div>
        <div className={`flex-container ${styles['top-content']}`}>
            <img src='/images/logo_big.png' alt='big logo' className={`mobile-hide ${styles['top-content__big-logo']}`} />
            <div className={`desktop-hide flex ${styles['top-content__small-logo-container']}`}>
                <img src='/images/logo_small.png' alt='small logo' className={styles['top-content__small-logo']}/>
            </div>
            {/* TODO: fix mobile text alignment! */}
            <div className={`align-top-mobile ${styles['top-content__text']}`}>
                <p>Join Canada&apos;s 150+ brightest minds for a hackathon that will knock your socks off!</p>
                {/* TODO: apply button */}
            </div>
        </div>
        <div className={`flex-container ${styles['bottom-content-container']}`}>
            <div className={styles['bottom-content']}>
                <h2>October 3rd to 4th, 2021</h2>
                <p>Schedule, challenges, and prizes revealed in:</p>
                <Countdown
                    // TODO: make sure this is the correct date
                    date={Date.parse("2021-09-28T00:00:00+0000")}
                    renderer={({ days, hours, minutes, seconds }) => (
                        <span>
                            {zeroify(days)}&nbsp;:&nbsp;{zeroify(hours)}&nbsp;:&nbsp;
                            {zeroify(minutes)}&nbsp;:&nbsp;{zeroify(seconds)}
                        </span>
                    )}
                />
            </div>
        </div>
    </>;
}