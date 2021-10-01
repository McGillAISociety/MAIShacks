import Button from '../../components/shared/Button';
import styles from '../../styles/LiveLanding.module.scss';
import MainSiteLink from '../shared/MainSiteLink';

import { FaChevronLeft } from 'react-icons/fa';

import Link from 'next/link';

const iconProps = { size: 20 }

export default function LiveLanding() {
    return <>
        <Link passHref href='/'>
            <div className={styles['home-button']}>
                <Button onClick={() => { }}>
                    {<FaChevronLeft {...iconProps} />}
                </Button>
            </div>
        </Link>
        <MainSiteLink />
        <div className="flex top-margin">
            <img src="/images/logo_big_live_site.png" alt="MAIS Hacks Logo" className={`${styles['mais-hacks-logo']} mobile-hide`} />
            <img src="/images/logo_small_live_site.png" alt="MAIS Hacks Logo" className={`${styles['mais-hacks-logo']} desktop-hide`} />
        </div>
    </>;
}