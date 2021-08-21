import { useState } from "react";
import styles from "../../styles/Accordion.module.scss";
import { FaPlus, FaMinus } from 'react-icons/fa'

// TODO: I find the unopened state styling a bit flat; change?
// TODO: animate the content expanding?

export default function Accordion({label, children}) {

    const [isOpen, setIsOpen] = useState(false);

    const iconProps = {
        onClick: () => setIsOpen(!isOpen),
        className: `hover-grow-large ${styles['icon']}`,
        color: 'white',
        size: 20
    }

    return <>
        {/* TODO: make this not have bottom corner radiuses when isOpen? */}
        {/* TODO: make only the text wrap, so the plus sign stays to the right on mobile */}
        <div className={`flex ${styles['label-container']}`}>
            <h3 className={styles['label']}>{label}</h3>
            {isOpen ?
                <FaMinus {...iconProps} />
                :
                <FaPlus {...iconProps} />
            }
        </div>
        {isOpen &&
            <div className={`card-border ${styles['content']}`}>
                {children}
            </div>
        }
    </>;
}