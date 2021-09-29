import Button from '../../components/shared/Button';
import styles from '../../styles/HomeButton.module.scss';

import { FaChevronLeft } from 'react-icons/fa';

import Link from 'next/link';

const iconProps = { size: 30 }

export default function HomeButton() {
    return <Link passHref href='/'>
        <div className={styles['home-button']}>
            <Button onClick={() => { }}>
                {<FaChevronLeft {...iconProps} />}
            </Button>
        </div>
    </Link>;
}