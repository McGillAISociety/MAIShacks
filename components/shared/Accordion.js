import { useState } from "react";
import styles from "../../styles/Accordion.module.scss";
import { FaPlus, FaMinus } from 'react-icons/fa'

// TODO: animate the icon/label on hover/click?
// TODO: animate the content expanding?

export default function Accordion({label, children}) {

    const [isOpen, setIsOpen] = useState(false);

    const iconProps = {
        onClick: () => setIsOpen(!isOpen),
        className: styles['icon'],
        color: 'white',
        size: 20
    }

    return <>
        {/* TODO: make this not have bottom corner radiuses when isOpen? */}
        <div className={`flex ${styles['label-container']}`}>
            <h3 className={styles['label']}>{label}</h3>
            {isOpen ?
                <FaMinus {...iconProps} />
                :
                <FaPlus {...iconProps} />
            }
            
        </div>
        {/* TODO: make this the same width as the label! */}
        {isOpen &&
            <div className={`card-border ${styles['content']}`}>
                {children}
            </div>
        }
    </>;
}