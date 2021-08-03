import styles from '../../styles/Countdown.module.scss';
import Countdown from 'react-countdown';
    
export default function MyCountdown() {

    const zeroify = (_num) => {
        const num = String(_num);
        return num.length === 1 ? `0${num}` : num;
    }

    return <div className="flex-container">
        <div className={styles['countdown-container']}>
            <h2>October 3rd to 4th, 2021</h2>
            <p>Schedule, challenges, and prizes revealed in:</p>
            <Countdown
                // TODO: make sure this is the correct date
                date={Date.parse("2021-09-28T00:00:00+0000")}
                renderer={({ days, hours, minutes, seconds }) => (
                    <span className={styles['countdown']}>
                        {zeroify(days)}&nbsp;:&nbsp;{zeroify(hours)}&nbsp;:&nbsp;
                        {zeroify(minutes)}&nbsp;:&nbsp;{zeroify(seconds)}
                    </span>
                )}
            />
        </div>
    </div>
}