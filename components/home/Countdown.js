import styles from '../../styles/Countdown.module.scss';
import Countdown from 'react-countdown';
    
export default function MyCountdown() {

    return <div className="flex-container">
        <div className={styles['countdown-container']}>
            <h2>October 3rd to 4th, 2021</h2>
            <p>Schedule, challenges, and prizes releasd in:</p>
            <Countdown
                date={Date.parse("2021-10-03T00:00:00+0000")}
                renderer={({ hours, minutes, seconds }) => (
                    <span className={styles['countdown']}>
                        {hours}&nbsp;:&nbsp;{minutes}&nbsp;:&nbsp;{seconds}
                    </span>
                )}
            />
        </div>
    </div>
}