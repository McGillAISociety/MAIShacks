import styles from '../../styles/Footer.module.scss';

const socials = [
    { name: 'email', link: 'mailto:mcgillaicontact@gmail.com' },
    { name: 'facebook', link: 'https://www.facebook.com/McGillAI/' },
    { name: 'instagram', link: 'https://www.instagram.com/mcgillaisociety/' },
    { name: 'linkedin', link: 'https://www.linkedin.com/company/mcgill-artificial-intelligence-society/' },
    { name: 'twitter', link: 'https://twitter.com/mcgillaisociety' },
    { name: 'github', link: 'https://github.com/McGillAISociety' },
    { name: 'medium', link: 'https://medium.com/mcgill-artificial-intelligence-review'}
]

// TODO: code of conduct
export default function Footer() {
    return <footer className={styles['footer']}>
        <div className='flex'>
            {socials.map((social, index) => (
                <a key={index} href={social.link} target="_blank" rel="noreferrer">
                    <img  src={`/images/footer-logos/${social.name}.png`} alt=""
                    className={styles['footer__logo']}/>
                </a>
            ))}
        </div>
        <div className='flex'>
            <small>© McGill AI Society 2021</small>
        </div>
    </footer>
}