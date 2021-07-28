import styles from '../../styles/Landing.module.scss';

export default function Landing() {
    return <>
        <div className={styles['background-img-wrapper']}>
            <img src='/images/sky.png' alt='background' />
        </div>
        {/* TODO: probably wrap this in a div along w/ the signpost */}
        {/* TODO: make sure my approach for these images works on mobile */}
        <img className={styles['clouds-img']} src="/images/clouds.png" alt="clouds" />
    </>;
}