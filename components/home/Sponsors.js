import Button from '../shared/Button';
import styles from '../../styles/Sponsors.module.scss'

// TODO: add the urls and different image sizes
const sponsors = [
    { name: 'mila', url: '', imgWidth: 300 },
    { name: 'sama', url: '', imgWidth: 300 },
    { name: 'cae', url: '', imgWidth: 200 },
    { name: 'squarepoint', url: '', imgWidth: 150 }
]

export default function Info() {
    return <>
        <h1>Sponsors</h1>
        <div className="flex">
            <div className={styles['sponsor-logos']}>
                <p>A big thank you to our amazing sponsors, without which MAIS Hacks would be impossible!</p>
                <div className="flex">
                    {sponsors.map((sponsor, index) => (
                        // TODO: add <a>s
                        <img key={index} src={`/images/sponsor-logos/${sponsor.name}.png`}
                            alt={`${sponsor.name} logo`} width={sponsor.imgWidth} />
                    ))}
                </div>
                <p>Want to see your logo here? <a href="mailto:mcgillaicontact@gmail.com">Sponsor MAIS Hacks</a>.</p>
            </div>
        </div>
     </>
}