import { MdEvent } from 'react-icons/md';
import { FaCode, FaChalkboardTeacher, FaDiscord } from 'react-icons/fa';
import { BsFillCameraVideoFill } from 'react-icons/bs';
import { GrGamepad } from 'react-icons/gr';

import styles from '../../styles/Schedule.module.scss';

const saturday = [
    { type: 'general', time: "9:30 AM", title: 'Doors Open / Registration', description: '' },
    { type: 'general', time: "10:30 - 11:30 AM", title: 'Opening ceremony', description: '' },
    { type: 'general', time: "11:30 AM - 12:00 PM", title: 'Team matching + Devpost Registration', description: '' },
    { type: 'hacking', time: "12:00 PM", title: 'Hacking starts!', description: '' },
    { type: 'workshop', time: "12:00 PM", title: 'Workshop 1', description: '' },
    { type: 'activity', time: "2:00 PM", title: 'Activity 1', description: '' },
    { type: 'workshop', time: "3:00 PM", title: 'Workshop 2', description: '' },
    { type: 'activity', time: "4:00 PM", title: 'Activity 2', description: '' },
    { type: 'workshop', time: "5:00 PM", title: 'Workshop 3', description: '' },
    { type: 'general', time: "6:30 PM", title: 'Dinner', description: '' },
    { type: 'activity', time: "8:00 PM", title: 'Activity 3', description: '' },
]
const sunday = [
    { type: 'general', time: "8:00 - 10:00 AM", title: 'Breakfast', description: '' },
    { type: 'hacking', time: "12:00 PM", title: 'Hacking ends!', description: '' },
    { type: 'general', time: "12:00 PM", title: 'Lunch', description: '' },
    { type: 'general', time: "12:00 - 2:00 PM", title: 'Judging', description: '' },
    { type: 'activity', time: "1:00 PM", title: 'Activity 4', description: '' },
    { type: 'general', time: "2:00 PM", title: 'Closing ceremonies', description: '' },
]

const typeIconProps = { size: 40, className: styles['event-container__type-icon'] };

const typeIconMappings = {
    'general': <MdEvent {...typeIconProps} />,
    'activity': <GrGamepad {...typeIconProps} />,
    'workshop': <FaChalkboardTeacher {...typeIconProps} />,
    'hacking': <FaCode {...typeIconProps} />
}

const platformIconProps = { size: 20, className: styles['event-container__platform-icon'] };
const platformIconMappings = {
    'discord': <FaDiscord {...platformIconProps} />,
    'zoom' : <BsFillCameraVideoFill {...platformIconProps} />
}

const renderDay = (events) => {
    return events.map((event, index) => (
        <div key={index}>
            <div className={`flex ${styles['event-container']}`}>
                <div className={`flex ${styles['event-container__left-content']}`}>
                    {typeIconMappings[event.type]}
                    <div>
                        <h3>{event.title}</h3>
                        <small>{event.platform && platformIconMappings[event.platform]} {event.time}</small>
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
        <h3 className={styles['day-title']}>Saturday, October 1st</h3>
        {renderDay(saturday)}
        <h3 className={styles['day-title']}>Sunday, October 2nd</h3>
        {renderDay(sunday)}
    </div>;
}