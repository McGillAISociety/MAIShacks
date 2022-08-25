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
    return <div className='top-margin'>
        <small className='text-center'>
            Join the Discord and Devpost <i>only if you have been accepted to MAIS Hacks!</i> You will be kicked otherwise.
        </small>
        <div className="flex-container">
            {resources.map(((resource, index) =>
                <div key={index} className={styles['button-wrapper']}>
                    <Button onClick={() => window.open(resource.link)}
                            disabled={!resource.link}>
                        <div className="flex">
                            {resource.icon} &nbsp; {resource.text}
                        </div>
                    </Button>
                </div>
            ))}
        </div>
    </div>
}