import {
    FaDiscord as Discord,
    FaDev as Devpost
} from 'react-icons/fa';

import Button from "../shared/Button";
import styles from '../../styles/Resources.module.scss';

const iconProps = { size: 30 };

const resources = [
    { icon: <Discord {...iconProps} />, text: "Discord", link: "" },
    { icon: <Devpost {...iconProps} />, text: "Devpost", link: "" }
]

export default function Resources() {
    return <div className="top-margin">
        <h2>Quick Links</h2>
        <div className="flex">
        {resources.map(((resource, index) =>
            <div key={index} className={styles['button-wrapper']}>
                <Button disabled={!resource.link}
                    onClick={() => window.open(resource.link)}>
                    <div className="flex">
                        {resource.icon} &nbsp; {resource.text}
                    </div>
                </Button>
            </div>
        ))}
        </div>
    </div>
}