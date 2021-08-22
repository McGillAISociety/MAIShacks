import styles from '../../styles/Landing.module.scss';
import Button from '../shared/Button';
import Countdown from 'react-countdown';

export default function Landing() {

    const zeroify = (_num) => {
        const num = String(_num);
        return num.length === 1 ? `0${num}` : num;
    }

    const text = <div className={styles['top-content__text']}>
        <p>
            Join Canada&apos;s 150+ brightest minds for a 24 hour hybrid AI hackathon!
        </p>
        <Button expand onClick={() => window.open('https://forms.gle/YM71yc3zLghNzSMDA')}>
            Apply Now!
        </Button>
    </div>;

    return <>
        <div className={styles['background']}></div>
        <a href="https://www.mcgillai.com/" target="_blank" rel="noreferrer">
            <img className={styles['mais-logo']}
                src="/images/mais_logo.png" alt="MAIS logo" />
        </a>
        <div className={styles['top-content']}>
            <div className={`mobile-hide flex-container ${styles['top-content__desktop-container']}`}>
                <img src='/images/logo_big.png' alt='big logo'
                    className={`bob-up-down ${styles['top-content__desktop-logo']}`} />
                {text}
            </div>
            <div className="desktop-hide">
                <div className="flex">
                    <img src='/images/logo_small.png' alt='small logo'
                        className={`bob-up-down ${styles['top-content__mobile-logo']}`} />
                </div>
                <div className="flex">
                    {text}
                </div>
            </div>
        </div>
        <div className={`flex-container ${styles['bottom-content-container']}`}>
            <div className={styles['bottom-content']}>
                <h2>October 2nd to 3rd, 2021 &nbsp;&middot;&nbsp; MILA // Online</h2>
                <div className={`flex-container ${styles['bottom-content__countdowns']}`}>
                {/* TODO: make these the correct dates */}
                    <div>
                        <p>Applications due in:</p>
                        <Countdown
                            date={Date.parse("2021-09-15T00:00:00+0000")}
                            renderer={({ days, hours, minutes, seconds }) => (
                                <span className={styles['bottom-content__countdown']}>
                                    {zeroify(days)}&nbsp;:&nbsp;{zeroify(hours)}&nbsp;:&nbsp;
                                    {zeroify(minutes)}&nbsp;:&nbsp;{zeroify(seconds)}
                                </span>
                            )}
                        />
                    </div>
                    <div>
                        <p>Schedule, challenges, and prizes drop in:</p>
                        <Countdown
                            date={Date.parse("2021-09-28T00:00:00+0000")}
                            renderer={({ days, hours, minutes, seconds }) => (
                                <span className={styles['bottom-content__countdown']}>
                                    {zeroify(days)}&nbsp;:&nbsp;{zeroify(hours)}&nbsp;:&nbsp;
                                    {zeroify(minutes)}&nbsp;:&nbsp;{zeroify(seconds)}
                                </span>
                            )}
                        />
                    </div>
                </div>
            </div>
        </div>
    </>;
}