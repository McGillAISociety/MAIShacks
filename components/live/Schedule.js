import { MdEvent } from 'react-icons/md';
import { FaCode, FaChalkboardTeacher, FaDiscord } from 'react-icons/fa';
import { BsFillCameraVideoFill } from 'react-icons/bs';
import { GrGamepad } from 'react-icons/gr';

import styles from '../../styles/Schedule.module.scss';

const saturday = [
    { type: 'general', time: "9:00 - 10:00 AM", title: 'Registration/Livestream starts', description: '' },
    { type: 'general', time: "10:00 - 10:45 AM", platform: 'zoom', title: 'Opening ceremony', description: '' },
    { type: 'general', time: "10:45 - 11:15 AM", title: 'Team matching', description: '' },
    { type: 'hacking', time: "11:00 AM", title: 'Hacking starts!', description: '' },
    { type: 'workshop', time: "1:00 - 2:00 PM", platform: 'zoom', title: 'Workshop 1', description: 'TBA' },
    { type: 'activity', time: "2:00 - 3:00 PM", platform: 'discord', title: 'Activity 1', description: 'Bob Ross MS Paint competition – win a $100 gift card!' },
    { type: 'workshop', time: "3:00 - 4:00 PM", platform: 'zoom', title: 'Workshop 2', description: 'Encode Justice Canada | Ethical AI' },
    { type: 'activity', time: "4:00 - 5:00 PM", platform: 'discord', title: 'Activity 2', description: 'Chess Tournament – win Chess.com Gold or $35 gift cards!' },
    { type: 'workshop', time: "5:00 - 6:00 PM", platform: 'zoom', title: 'Workshop 3', description: 'Sama | Creating Training Data for Computer Vision and Machine Learning' },
    { type: 'activity', time: "9:00 - 10:00 PM", platform: 'discord', title: 'Activity 3', description: 'Party games (Gartic, skribbl.io, amogus, etc.)' },
]
const sunday = [
    { type: 'activity', time: "12:00 - 2:00 AM", platform: 'discord', title: 'Activity 4', description: 'Chill activities (Aggie.io, movie watch party, Soundtrap, etc.)' },
    { type: 'activity', time: "11:00 - 11:30 AM", platform: 'discord', title: 'Activity 5', description: 'Typeracer competition – win a Keychron Mechanical Keyboard!' },
    { type: 'hacking', time: "11:00 AM", title: 'Hacking ends!', description: '' },
    { type: 'hacking', time: "12:00 - 2:00 PM", platform: 'discord', title: 'Judging', description: '' },
    { type: 'general', time: "2:30 - 3:15 PM", platform: 'zoom', title: 'Closing ceremony', description: '' },
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
        <h3 className={styles['day-title']}>Saturday, October 2nd</h3>
        {renderDay(saturday)}
        <h3 className={styles['day-title']}>Sunday, October 3rd</h3>
        {renderDay(sunday)}
    </div>;
}