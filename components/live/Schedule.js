import { MdEvent } from "react-icons/md";
import { FaCode, FaChalkboardTeacher, FaDiscord } from "react-icons/fa";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { GrGamepad } from "react-icons/gr";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import styles from "../../styles/Schedule.module.scss";

const beginner_saturday = [
  {
    type: "general",
    time: "9:30 AM - 10:30 AM",
    title: "Doors Open / Registration",
    description: "Mezzanine",
  },
  {
    type: "general",
    time: "10:30 AM - 11:30 AM",
    title: "Opening ceremony",
    description: "ENGTR0100",
  },
  {
    type: "general",
    time: "11:30 AM - 12:00 PM",
    title: "Team matching + Devpost Registration",
    description: "",
  },
  {
    type: "hacking",
    time: "12:00 PM",
    title: "Hacking starts!",
    description: "",
  },
  {
    type: "general",
    time: "12:00 PM - 12:30 PM",
    title: "Lunch",
    description: "Mezzanine",
  },
  {
    type: "workshop",
    time: "1:00 PM - 1:30 PM",
    title: "Workshop - Basics of AI",
    description: "ENGTR0100",
  },
  {
    type: "workshop",
    time: "1:30 PM - 2:00 PM",
    title: "Workshop - Basics of Scikit-learn",
    description: "ENGTR0100",
  },
  {
    type: "workshop",
    time: "1:30 PM - 2:00 PM",
    title: "Workshop - Data Security with Steven Li",
    description: "ENGTR2100",
  },
  {
    type: "activity",
    time: "2:00 PM - 2:30 PM",
    title: "Manhunt",
    description: "ENGTR2120",
  },
  {
    type: "workshop",
    time: "2:30 PM - 3:00 PM",
    title: "Workshop - Basics of Pytorch",
    description: "ENGTR0100",
  },
  {
    type: "general",
    time: "3:00 PM - 4:00 PM",
    title: "Networking Hour",
    description: "Mezzanine",
  },
  {
    type: "workshop",
    time: "4:00 PM - 4:30 PM",
    title: "Workshop - Project Pitch by Queens University",
    description: "ENGTR0100",
  },
  {
    type: "workshop",
    time: "4:00 PM - 5:00 PM",
    title: "Workshop - Talk by Luc Duong on AI and Biology",
    description: "ENGTR2100",
  },
  {
    type: "workshop",
    time: "4:00 PM - 5:00 PM",
    title: "Workshop - Breaking ML Systems",
    description: "ENGTR2120",
  },
  {
    type: "workshop",
    time: "5:00 PM - 6:00 PM",
    title: "Workshop - AI Safety",
    description: "ENGTR2120",
  },
  {
    type: "workshop",
    time: "5:00 PM - 5:30 PM",
    title: "Workshop - Backend",
    description: "ENGTR0100",
  },
  {
    type: "workshop",
    time: "5:30 PM - 6:00 PM",
    title: "Workshop - Frontend",
    description: "ENGTR0100",
  },
  {
    type: "general",
    time: "6:30 PM - 7:00 PM",
    title: "Dinner",
    description: "Mezzanine",
  },
  {
    type: "activity",
    time: "7:00 PM - 7:30 PM",
    title: "Stack the Cup",
    description: "ENGTR2120",
  },
  {
    type: "activity",
    time: "8:00 PM - 8:30 PM",
    title: "Origami",
    description: "ENGTR2120",
  },
];
const beginner_sunday = [
  {
    type: "general",
    time: "8:30 - 10:30 AM",
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
    time: "12:00 PM",
    title: "Lunch",
    description: "Mezzanine",
  },
  {
    type: "general",
    time: "12:00 - 2:00 PM",
    title: "Judging",
    description: "Mezzanine",
  },
  {
    type: "general",
    time: "2:30 PM - 3:30 PM",
    title: "Closing Ceremonies",
    description: "ENGTR0100",
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
      <h3 className={styles["day-title"]}>Saturday, September 30th</h3>
      {renderDay(beginner_saturday)}
      <h3 className={styles["day-title"]}>Sunday, October 1st</h3>
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
