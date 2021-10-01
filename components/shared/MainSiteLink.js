import styles from '../../styles/MainSiteLink.module.scss';

export default function MainSiteLink() {
    return <a href="https://www.mcgillai.com/" target="_blank" rel="noreferrer">
            <img className={styles['mais-logo']}
                src="/images/mais_logo.png" alt="MAIS logo" />
    </a>
}