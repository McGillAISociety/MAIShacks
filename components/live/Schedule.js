import { MdEvent } from 'react-icons/md';
import { FaCode, FaChalkboardTeacher, FaDiscord } from 'react-icons/fa';
import { BsFillCameraVideoFill } from 'react-icons/bs';
import { GrGamepad } from 'react-icons/gr';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import styles from '../../styles/Schedule.module.scss';

const beginner_saturday = [
    { type: 'general', time: "9:30 AM - 10:30 AM", title: 'Doors Open / Registration', description: 'Mezzanine' },
    { type: 'general', time: "10:30 AM - 11:30 AM", title: 'Opening ceremony', description: 'ENGTR0100' },
    { type: 'general', time: "11:30 AM - 12:00 PM", title: 'Team matching + Devpost Registration', description: '' },
    { type: 'hacking', time: "12:00 PM", title: 'Hacking starts!', description: '' },
    { type: 'general', time: "12:00 PM - 12:30 PM", title: 'Lunch', description: 'Mezzanine' },
    { type: 'workshop', time: "12:30 PM - 12:45 PM", title: 'Workshop - AI/ML Overview', description: 'ENGTR0100' },
    { type: 'workshop', time: "12:45 PM - 1:00 PM", title: 'Workshop - Hackathon Tools, Classic ML', description: 'ENGTR0100' },
    { type: 'workshop', time: "1:00 PM - 1:15 PM", title: 'Workshop - Classic ML', description: 'ENGTR0100' },
    { type: 'activity', time: "2:30 PM - 3:00 PM", title: 'Networking Happy Hour', description: 'Mezzanine' },
    { type: 'workshop', time: "2:30 PM - 2:45 PM", title: 'Workshop - Deep Learning', description: 'ENGTR0100' },
    { type: 'activity', time: "3:30 PM - 4:00 PM", title: 'Activity - Snyk Capture the Flag (MLH)', description: 'ENGTR2120' },
    { type: 'workshop', time: "4:00 PM - 5:00 PM", title: 'Workshop - AI and You: Social Impact, Ethics, and Making the World a Better Place', description: 'ENGTR2110' },
    { type: 'activity', time: "5:00 PM - 5:30 PM", title: 'Activity - Knights of the Square Table: Chess Tournament', description: 'ENGTR2120' },
    { type: 'workshop', time: "5:30 PM - 5:45 PM", title: 'Workshop - Backend', description: 'ENGTR0100' },
    { type: 'general', time: "6:30 PM - 7:00 PM", title: 'Dinner', description: 'Mezzanine' },
    { type: 'workshop', time: "7:00 PM - 7:15 PM", title: 'Workshop - Frontend', description: 'ENGTR0100' },
    { type: 'activity', time: "8:00 PM - 8:30 PM", title: 'Activity - Werewolf (MLH)', description: 'ENGTR2120' },
]
const beginner_sunday = [
    { type: 'general', time: "8:30 - 10:30 AM", title: 'Breakfast', description: 'Mezzanine' },
    { type: 'hacking', time: "12:00 PM", title: 'Hacking ends!', description: '' },
    { type: 'general', time: "12:00 PM", title: 'Lunch', description: 'Mezzanine' },
    { type: 'general', time: "12:00 - 2:00 PM", title: 'Judging', description: 'Mezzanine' },
    { type: 'activity', time: "1:00 PM - 1:30 PM", title: "Activity - You're My Type: Typing Contest", description: 'ENGTR0100' },
    { type: 'general', time: "2:00 PM - 2:30 PM", title: 'Closing ceremonies', description: '' },
]

const general_saturday = [
    { type: 'general', time: "9:30 AM - 10:30 AM", title: 'Doors Open / Registration', description: 'Mezzanine' },
    { type: 'general', time: "10:30 AM - 11:30 AM", title: 'Opening ceremony', description: 'ENGTR0100' },
    { type: 'general', time: "11:30 AM - 12:00 PM", title: 'Team matching + Devpost Registration', description: '' },
    { type: 'hacking', time: "12:00 PM", title: 'Hacking starts!', description: '' },
    { type: 'general', time: "12:00 PM - 12:30 PM", title: 'Lunch', description: 'Mezzanine' },
    { type: 'workshop', time: "12:30 PM - 1:30 PM", title: 'Workshop - Intro to ML', description: 'ENGTR2110' },
    { type: 'workshop', time: "1:30 PM - 2:30 PM", title: 'Networking Happy Hour', description: 'Mezzanine' },
    { type: 'workshop', time: "2:30 PM - 3:30 PM", title: 'Workshop - stability.ai', description: 'ENGTR2110' },
    { type: 'activity', time: "3:30 PM - 4:00 PM", title: 'Activity - Snyk Capture the Flag (MLH)', description: 'ENGTR2120' },
    { type: 'workshop', time: "4:00 PM - 5:00 PM", title: 'Workshop - AI and You: Social Impact, Ethics, and Making the World a Better Place', description: 'ENGTR2110' },
    { type: 'activity', time: "5:00 PM - 5:30 PM", title: 'Activity - Knights of the Square Table: Chess Tournament', description: 'ENGTR2120' },
    { type: 'workshop', time: "5:30 PM - 6:30 PM", title: 'Workshop', description: 'ENGTR2110' },
    { type: 'general', time: "6:30 PM - 7:00 PM", title: 'Dinner', description: 'Mezzanine' },
    { type: 'activity', time: "8:00 PM - 8:30 PM", title: 'Activity - Werewolf (MLH)', description: 'ENGTR2120' },
]
const general_sunday = [
    { type: 'general', time: "8:30 - 10:30 AM", title: 'Breakfast', description: 'Mezzanine' },
    { type: 'hacking', time: "12:00 PM", title: 'Hacking ends!', description: '' },
    { type: 'general', time: "12:00 PM", title: 'Lunch', description: 'Mezzanine' },
    { type: 'general', time: "12:00 - 2:00 PM", title: 'Judging', description: 'Mezzanine' },
    { type: 'activity', time: "1:00 PM - 1:30 PM", title: "Activity - You're My Type: Typing Contest", description: 'ENGTR0100' },
    { type: 'general', time: "2:00 PM - 2:30 PM", title: 'Closing ceremonies', description: 'ENGTR0100' },
]

const policy_saturday = [
    { type: 'general', time: "9:30 AM - 10:30 AM", title: 'Doors Open / Registration', description: 'Mezzanine' },
    { type: 'general', time: "10:30 AM - 11:30 AM", title: 'Opening ceremony', description: 'ENGTR0100' },
    { type: 'hacking', time: "12:00 PM", title: 'Hacking starts!', description: '' },
    { type: 'general', time: "12:00 PM - 12:30 PM", title: 'Lunch', description: 'Mezzanine' },
    { type: 'workshop', time: "12:15 PM - 12:40 PM", title: 'Workshop - Basics of AI', description: 'ENGTR2100' },
    { type: 'workshop', time: "12:40 PM - 1:00 PM", title: 'Workshop - AI and You', description: 'ENGTR2100' },
    { type: 'workshop', time: "1:00 PM - 1:45 PM", title: 'Workshop - Ethics of AI with Abhishek Gupta', description: 'ENGTR2100' },
    { type: 'workshop', time: "1:45 PM - 2:00 PM", title: 'Workshop - Future of AI', description: 'ENGTR2100' },
    { type: 'workshop', time: "2:00 PM - 2:15 PM", title: 'Workshop - Debrief + Team Matching', description: 'ENGTR2100' },
    { type: 'activity', time: "3:30 PM - 4:00 PM", title: 'Activity - Snyk Capture the Flag (MLH)', description: 'ENGTR2120' },
    { type: 'activity', time: "5:00 PM - 5:30 PM", title: 'Activity - Knights of the Square Table: Chess Tournament', description: 'ENGTR2120' },
    { type: 'general', time: "6:30 PM - 7:00 PM", title: 'Dinner', description: 'Mezzanine' },
    { type: 'activity', time: "8:00 PM - 8:30 PM", title: 'Activity - Werewolf (MLH)', description: 'ENGTR2120' },
]
const policy_sunday = [
    { type: 'general', time: "8:30 - 10:30 AM", title: 'Breakfast', description: 'Mezzanine' },
    { type: 'hacking', time: "12:00 PM", title: 'Hacking ends!', description: '' },
    { type: 'general', time: "12:00 PM", title: 'Lunch', description: 'Mezzanine' },
    { type: 'general', time: "12:00 - 2:00 PM", title: 'Presentations', description: 'ENGTR2100' },
    { type: 'activity', time: "1:00 PM - 1:30 PM", title: "Activity - You're My Type: Typing Contest", description: 'ENGTR0100' },
    { type: 'general', time: "2:00 PM - 2:30 PM", title: 'Closing ceremonies', description: 'ENGTR0100' },
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
    return (
    
        <Tabs className="Tabs">
            <TabList>
                <Tab><h3>Beginner</h3></Tab>
                <Tab><h3>General</h3></Tab>
                <Tab><h3>Policy</h3></Tab>
            </TabList>
            <div className="top-margin-thicc">
            <TabPanel>
                <h3 className={styles['day-title']}>Saturday, October 1st</h3>
                {renderDay(beginner_saturday)}
                <h3 className={styles['day-title']}>Sunday, October 2nd</h3>
                {renderDay(beginner_sunday)}
            </TabPanel>
            <TabPanel>
                <h3 className={styles['day-title']}>Saturday, October 1st</h3>
                {renderDay(general_saturday)}
                <h3 className={styles['day-title']}>Sunday, October 2nd</h3>
                {renderDay(general_sunday)}
            </TabPanel>
            <TabPanel>
                <h3 className={styles['day-title']}>Saturday, October 1st</h3>
                {renderDay(policy_saturday)}
                <h3 className={styles['day-title']}>Sunday, October 2nd</h3>
                {renderDay(policy_sunday)}
            </TabPanel>
            </div>
        </Tabs>);
}