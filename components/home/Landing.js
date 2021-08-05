import styles from '../../styles/Landing.module.scss';
import Countdown from 'react-countdown';

// TODO: mais logo in the top right
export default function Landing() {

    const zeroify = (_num) => {
        const num = String(_num);
        return num.length === 1 ? `0${num}` : num;
    }

    const text = <div className={styles['top-content__text']}>
        <p>Join Canada&apos;s 150+ brightest minds for a hackathon that will knock your socks off!</p>
        {/* TODO: apply button */}
    </div>;

    return <>
        <div className={styles['background']}></div>
        <div className={styles['top-content']}>
            <div className={`mobile-hide flex-container ${styles['top-content__desktop-container']}`}>
                <img src='/images/logo_big.png' alt='big logo'
                    className={`mobile-hide ${styles['top-content__desktop-logo']}`} />
                {text}
            </div>
            <div className="desktop-hide">
                <div className="flex">
                    <img src='/images/logo_small.png' alt='small logo'
                        className={styles['top-content__mobile-logo']} />
                </div>
                <div className="flex">
                    {text}
                </div>
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