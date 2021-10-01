import styles from '../../styles/Sponsors.module.scss'

const sponsors = [
    // { name: 'mila', url: 'https://mila.quebec/en/', imgWidth: 300 },
    { name: 'sama', url: 'https://www.sama.com/careers', imgWidth: 300 },
    { name: 'intact', url: 'https://careers.intactfc.com/intactinsurance/ca/en', imgWidth: 300 },
    { name: 'cae', url: 'https://www.cae.com/careers/', imgWidth: 200 },
    { name: 'squarepoint', url: 'https://www.squarepoint-capital.com/', imgWidth: 150 }
]

export default function Sponsors({ justImages = false }) {
    return <>
        {!justImages && <h1>Sponsors</h1>}
        <div className="flex">
            <div className={styles['sponsor-logos']}>
                {!justImages && <p>A big thank you to our amazing sponsors, without which MAIS Hacks would be impossible!</p>}
                <div className="flex">
                    {sponsors.map((sponsor, index) => (
                        <a key={index} href={sponsor.url} target="_blank" rel="noreferrer">
                            <img src={`/images/sponsor-logos/${sponsor.name}.png`}
                                alt={`${sponsor.name} logo`} width={sponsor.imgWidth} />
                        </a>
                    ))}
                </div>
                {!justImages && <p>Want to see your logo here? <a href="mailto:mcgillaicontact@gmail.com">Sponsor MAIS Hacks</a>.</p>}
            </div>
        </div>
     </>
}