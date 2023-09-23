import { FaDiscord as Discord, FaDev as Devpost } from "react-icons/fa";

import Button from "../shared/Button";
import styles from "../../styles/Resources.module.scss";

const iconProps = { size: 30 };

const resources = [
  {
    icon: <Discord {...iconProps} />,
    text: "Discord",
    link: "https://discord.gg/96fjuebv",
  },
  {
    icon: <Devpost {...iconProps} />,
    text: "Devpost",
    link: "https://maishacks2023.devpost.com/",
  },
];

export default function Resources() {
  return (
    <div className="top-margin">
      <small className="text-center">
        Join the Discord and Devpost{" "}
        <i>only if you have been accepted to MAIS Hacks!</i> You will be kicked
        otherwise.
      </small>
      <br></br>
      <small className="text-center">
        Have some feedback? Submit it anonymously{" "}
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSefYnGQjK0PG6opR2-oZ6sDXYp3crOE_Y6TkTKCqNWGoXNrog/viewform"
          target="_blank"
          rel="noreferrer"
        >
          here.
        </a>
      </small>
      <div className="flex-container">
        {resources.map((resource, index) => (
          <div key={index} className={styles["button-wrapper"]}>
            <Button
              onClick={() => window.open(resource.link)}
              disabled={!resource.link}
            >
              <div className="flex">
                {resource.icon} &nbsp; {resource.text}
              </div>
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
