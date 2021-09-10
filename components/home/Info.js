import styles from '../../styles/Info.module.scss';

export default function Info() {

    return <div>
        <div className="flex-container">
            <div>
                <div className={'text-container'}>
                        <h1>Canada&apos;s Largest AI Hackathon Goes Hybrid.</h1>
                        <p>Innovation lies at the heart of MAIS Hacks, with past winners building solutions for topics ranging between music composition, plant pathology, and security patrols.
                        </p>
                        <p>This year, contingent upon the COVID-19 situation in Montréal and with strong health protocols in place, we&apos;re thrilled to offer optional in-person components at <a href="https://mila.quebec/en/" target="_blank" rel="noreferrer">Mila - the Quebec AI Institute</a>! And we&apos;ll still offer a fantastic online experience through platforms such as Discord and Gather.town.</p>
                        <p>
                        Regardless of whether you’re an AI novice or veteran, everyone is welcome to join. Just bring a desire to learn about how AI can be used to overcome societal problems and boost competitiveness – and we’ll provide the mentors, computing credits, and swag.
                        </p>
                    </div>
                <img src="/images/connecty_boi.png" alt="connecty boi"
                    className={`${styles['connecty-boi']} mobile-hide`}
                />
            </div>
        </div>
        <div className="flex-container">
            <div className={`card-border ${styles['bubble']} ${styles['bubble--left']}`}>
                <h2>Social Networking and Team Making</h2>
                <p>Don&apos;t worry if you apply alone, there will be ample opportunities to connect with your peers and match yourself with the perfect team!</p>
                <p>Whether you&apos;re participating online or in-person, MAIS Hacks provides various resources, social activities and networking opportunities to help you make lasting connections.</p>
            </div>
            <div className={`card-border ${styles['bubble']} ${styles['bubble--center']}`}>
                <h2>Workshops and Activities</h2>
                <p>Want to upgrade your toolbox? Looking for inspiration? Our workshops and sponsor talks will surely help you gain knowledge and creativity.</p>
                <p>If you think that a hackathon is all work and no play, think again! Get ready for video games, movie screenings, Easter eggs and funky prizes to be won...as well as surprises we can’t reveal to you just yet!</p>
            </div>
            <div className={`card-border ${styles['bubble']} ${styles['bubble--right']}`}>
                <h2>Projects</h2>
                <p>Build an awesome AI project with your teammates - and along the way, gain invaluable experience, opportunities, and exposure to the field of AI!</p>
                <p>And if that&apos;s not motivation enough, we have over $5000 in prizes to be won.</p>
                <p>Just last year, our winners consisted of innovative projects such as a&nbsp;
                    <a href="https://devpost.com/software/plant-disease-identifier" target="_blank" rel="noreferrer">plant disease identifier</a>,&nbsp;
                    <a href="https://devpost.com/software/mbti-personality-classifier-2eho6w" target="_blank" rel="noreferrer">personality classifier</a>,&nbsp;and&nbsp;
                    <a href="https://devpost.com/software/machine-translation-for-low-resource-languages" target="_blank" rel="noreferrer">indigenous language translator</a>.</p>
            </div>
        </div>
    </div>
}