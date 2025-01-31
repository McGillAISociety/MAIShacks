import { MdEvent } from "react-icons/md";
import { FaCode, FaChalkboardTeacher, FaDiscord } from "react-icons/fa";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { GrGamepad } from "react-icons/gr";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import styles from "../../styles/Schedule.module.scss";

const beginner_saturday = [
  {
    type: "general",
    time: "11:00 AM - 11:30 AM",
    title: "Opening ceremony",
    description: "ENGTR 0100",
  },
  {
    type: "general",
    time: "12:00 PM - 1:00 PM",
    title: "Lunch",
    description: "Mezzanine",
  },
  {
    type: "workshop",
    time: "1:00 PM - 1:45 PM",
    title: "Intro to AI workshop",
    description: "ENGTR 0100",
  },
  {
    type: "workshop",
    time: "1:45 PM - 2:15 PM",
    title: "Intro to scikit learn",
    description: "ENGTR 0100",
  },
  {
    type: "workshop",
    time: "2:30 PM - 3:15 PM",
    title: "Safety workshop",
    description: "ENGTR 2100",
  },
  {
    type: "general",
    time: "3:30 PM - 3:15 PM",
    title: "Brownie Time",
    description: "Mezzanine",
  },
  {
    type: "workshop",
    time: "4:00 PM - 4:45 PM",
    title: "AI in Neuroscience",
    description: "ENGTR 2100",
  },
  {
    type: "workshop",
    time: "4:00 PM - 4:30 PM",
    title: "Backend workshop",
    description: "ENGTR 0100",
  },
  {
    type: "workshop",
    time: "4:45 PM - 5:30 PM",
    title: "Frontend workshop",
    description: "ENGTR 0100",
  },
  {
    type: "general",
    time: "6:00 PM - 7:00 PM",
    title: "Dinner",
    description: "",
  },
  {
    type: "activity",
    time: "7:00 PM - 7:30 PM",
    title: "Slides Karaoke",
    description: "ENGTR2110",
  },
  {
    type: "activity",
    time: "10:30 PM - 11:00 PM",
    title: "Werewolves",
    description: "ENGTR2110",
  },
  {
    type: "general",
    time: "12:00 AM",
    title: "Hot Chocolate",
    description: "Mezzanine",
  }
];
const beginner_sunday = [
  {
    type: "general",
    time: "8:00 - 10:00 AM",
    title: "Breakfast",
    description: "Mezzanine",
  },
  {
    type: "hacking",
    time: "12:00 PM",
    title: "Hacking ends!",
    description: "",
  },
  {
    type: "general",
    time: "12:00 PM - 2:30 pm",
    title: "Judging",
    description: "ENGTR 0100",
  },
  {
    type: "general",
    time: "12:00 - 2:30 PM",
    title: "Lunch",
    description: "Mezzanine",
  },
  {
    type: "general",
    time: "3:30 PM - 4:00 PM",
    title: "Closing Ceremonies",
    description: "ENGTR 0100",
  },
];

const typeIconProps = {
  size: 40,
  className: styles["event-container__type-icon"],
};

const typeIconMappings = {
  general: <MdEvent {...typeIconProps} />,
  activity: <GrGamepad {...typeIconProps} />,
  workshop: <FaChalkboardTeacher {...typeIconProps} />,
  hacking: <FaCode {...typeIconProps} />,
};

const platformIconProps = {
  size: 20,
  className: styles["event-container__platform-icon"],
};
const platformIconMappings = {
  discord: <FaDiscord {...platformIconProps} />,
  zoom: <BsFillCameraVideoFill {...platformIconProps} />,
};

const renderDay = (events) => {
  return events.map((event, index) => (
    <div key={index}>
      <div className={`flex ${styles["event-container"]}`}>
        <div className={`flex ${styles["event-container__left-content"]}`}>
          {typeIconMappings[event.type]}
          <div>
            <h3>{event.title}</h3>
            <small>
              {event.platform && platformIconMappings[event.platform]}{" "}
              {event.time}
            </small>
          </div>
        </div>
        <p>{event.description}</p>
      </div>
      {index !== events.length - 1 && <hr className={styles["hr"]} />}
    </div>
  ));
};

export default function Schedule() {
  return (
    <div>
      <h3 className={styles["day-title"]}>Saturday, February 1st</h3>
      {renderDay(beginner_saturday)}
      <h3 className={styles["day-title"]}>Sunday, February 2nd</h3>
      {renderDay(beginner_sunday)}
    </div>
    /*<Tabs className="Tabs">
      <TabList>
        <Tab>
          <h3>Beginner</h3>
        </Tab>
        <Tab>
          <h3>General</h3>
        </Tab>
        <Tab>
          <h3>Policy</h3>
        </Tab>
      </TabList>
      <div className="top-margin-thicc">
        <TabPanel>
          <h3 className={styles["day-title"]}>Saturday, October 1st</h3>
          {renderDay(beginner_saturday)}
          <h3 className={styles["day-title"]}>Sunday, October 2nd</h3>
          {renderDay(beginner_sunday)}
        </TabPanel>
        <TabPanel>
          <h3 className={styles["day-title"]}>Saturday, October 1st</h3>
          {renderDay(general_saturday)}
          <h3 className={styles["day-title"]}>Sunday, October 2nd</h3>
          {renderDay(general_sunday)}
        </TabPanel>
        <TabPanel>
          <h3 className={styles["day-title"]}>Saturday, October 1st</h3>
          {renderDay(policy_saturday)}
          <h3 className={styles["day-title"]}>Sunday, October 2nd</h3>
          {renderDay(policy_sunday)}
        </TabPanel>
      </div>
    </Tabs>*/
  );
}
