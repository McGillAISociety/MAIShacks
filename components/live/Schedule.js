import { MdEvent } from 'react-icons/md';
import { FaCode, FaChalkboardTeacher } from 'react-icons/fa';
import { GrGamepad } from 'react-icons/gr';

import styles from '../../styles/Schedule.module.scss';

const saturday = [
    { type: 'general', time: "9:00 - 10:00 am", title: 'Registration/Livestream starts', description: '' },
    { type: 'general', time: "10:00 - 10:45 am", title: 'Opening ceremony', description: '' },
    { type: 'general', time: "10:45 - 11:15 am", title: 'Team matching', description: '' },
    { type: 'hacking', time: "11:00 am", title: 'Hacking starts!', description: '' },
    { type: 'workshop', time: "1:00 - 2:00 pm", title: 'Workshop 1', description: '' },
    { type: 'activity', time: "2:00 - 3:00 pm", title: 'Activity 1', description: '' },
    { type: 'workshop', time: "3:00 - 4:00 pm", title: 'Workshop 2', description: '' },
    { type: 'activity', time: "4:00 - 5:00 pm", title: 'Activity 2', description: '' },
    { type: 'workshop', time: "5:00 - 6:00 pm", title: 'Workshop 3', description: '' },
    { type: 'activity', time: "9:00 pm", title: 'Activity 3', description: '' },
]
const sunday = [
    { type: 'activity', time: "12:00 am", title: 'Activity 4', description: '' },
    { type: 'hacking', time: "11:00 am", title: 'Hacking ends!', description: '' },
    { type: 'hacking', time: "12:00 - 2:00 pm", title: 'Judging', description: '' },
    { type: 'general', time: "2:30 - 3:15 pm", title: 'Closing ceremony', description: '' },
]

const iconProps = { size: 40, className: styles['event-container__icon'] };

const iconMappings = {
    'general': <MdEvent {...iconProps} />,
    'activity': <GrGamepad {...iconProps} />,
    'workshop': <FaChalkboardTeacher {...iconProps} />,
    'hacking': <FaCode {...iconProps} />
}

const renderDay = (events) => {
    return events.map((event, index) => (
        <div key={index}>
            <div className={`flex ${styles['event-container']}`}>
                <div className={`flex ${styles['event-container__left-content']}`}>
                    {iconMappings[event.type]}
                    <div>
                        <h3>{event.title}</h3>
                        <small>{event.time}</small>
                    </div>
                </div>
                <p>{event.description}</p>
            </div>
            {index !== events.length - 1 && <hr className={styles['hr']}/>}
        </div>
    ));
}

export default function Schedule() {
    return <div className="top-margin-thicc">
        <h2>Schedule</h2>
        <small className={styles['subtitle']}>
            Links to all events will be made available to participants through the Discord.
        </small>
        <h3 className={styles['day-title']}>Saturday, October 2nd</h3>
        {renderDay(saturday)}
        <h3 className={styles['day-title']}>Sunday, October 3rd</h3>
        {renderDay(sunday)}
    </div>;
}