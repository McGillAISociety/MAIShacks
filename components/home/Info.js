import styles from '../../styles/Info.module.scss';

export default function Info() {

    return <div className={styles['container']}>
        <div className="flex-container">
            <div>
                <div className={'text-container'}>
                        <h1>Canada&apos;s Largest AI Hackathon.</h1>
                        <p>Innovation lies at the heart of MAIS Hacks, with past winners building applications and solutions for topics ranging from music composition, plant pathology, and security patrols.
                        </p>
                        <p>
                        Regardless of whether you’re an AI novice or veteran, everyone is welcome to join. We want you to bring life, a desire to learn about AI, and how it can be used to overcome societal problems and boost competitiveness. Bring your best ideas for a fruitful weekend, and we’ll provide the mentors, computing credits, and swag.
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
                <p>Through the use of social media and communication platforms such as Microsoft Teams, MAIS Hacks will continue to help you meet new people and form new friendships.</p>
                <p>Don't worry if you apply alone, there will be a Facebook group and channel dedicated to networking with your peers and team matching.</p>
            </div>
            <div className={`card-border ${styles['bubble']} ${styles['bubble--center']}`}>
                <h2>Workshops and Activities</h2>
                <p>Want to upgrade your toolbox? Looking for inspiration? Our live-streamed workshops and sponsor talks will surely help you gain knowledge and creativity.</p>
                <p>If you think that a virtual hackathon is all work and no fun, think again! Get ready for video games, movie screenings, Easter eggs and funky prizes to be won... as well as surprises we can’t reveal to you just yet!</p>
            </div>
            <div className={`card-border ${styles['bubble']} ${styles['bubble--right']}`}>
                <h2>Projects</h2>
                <p>Build an awesome AI project with your teammates! It will help you gain experience, opportunities, and exposure to the field of AI. And, as always, there will be many prizes to be won!</p>
                <p>Showcase all your skills through your AI project!</p>
            </div>
        </div>
    </div>
}