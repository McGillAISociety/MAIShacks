import styles from '../../styles/Info.module.scss';

export default function Info() {

    return <div className={styles['container']}>
        <div className="flex-container">
            <div>
                <div className={'text-container'}>
                        <h1>Canada&apos;s Largest AI Hackathon.</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque venenatis venenatis turpis maximus cursus. Etiam dapibus risus ut neque mollis accumsan. Suspendisse imperdiet vitae nulla ac consectetur.
                        </p>
                        <p>
                        Donec dictum ut nulla nec ultricies. Morbi non enim molestie felis viverra efficitur vel ac libero. Suspendisse potenti. Phasellus eget faucibus dui. Nam luctus eleifend rhoncus. Ut eleifend quam orci, ac varius ligula posuere ac. Donec id ornare enim. Aliquam vel metus arcu. Vestibulum ante ipsum primis in faucibus.
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
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque venenatis venenatis turpis maximus cursus. Etiam dapibus risus ut neque mollis accumsan. Suspendisse imperdiet vitae nulla ac consectetur.</p>
            </div>
            <div className={`card-border ${styles['bubble']} ${styles['bubble--center']}`}>
                <h2>Workshops and Activities</h2>
                <p>Morbi non enim molestie felis viverra efficitur vel ac libero. Suspendisse potenti. Phasellus eget faucibus dui. Nam luctus eleifend rhoncus.</p>
            </div>
            <div className={`card-border ${styles['bubble']} ${styles['bubble--right']}`}>
                <h2>Projects</h2>
                <p>Ut eleifend quam orci, ac varius ligula posuere ac. Donec id ornare enim. Aliquam vel metus arcu. Vestibulum ante ipsum primis in faucibus.</p>
            </div>
        </div>
    </div>
}