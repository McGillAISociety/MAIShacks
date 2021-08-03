import styles from '../../styles/FAQ.module.scss';
import Accordion from '../shared/Accordion';

const FAQs = [
    { question: "Test Question #1", answer: "Ut eleifend quam orci, ac varius ligula posuere ac. Donec id ornare enim. Aliquam vel metus arcu. Vestibulum ante ipsum primis in faucibus." },
    { question: "Test Question #2", answer: "Ut eleifend quam orci, ac varius ligula posuere ac. Donec id ornare enim. Aliquam vel metus arcu. Vestibulum ante ipsum primis in faucibus." },
    { question: "Test Question #3", answer: "Ut eleifend quam orci, ac varius ligula posuere ac. Donec id ornare enim. Aliquam vel metus arcu. Vestibulum ante ipsum primis in faucibus." },
    { question: "Test Question #4", answer: "Ut eleifend quam orci, ac varius ligula posuere ac. Donec id ornare enim. Aliquam vel metus arcu. Vestibulum ante ipsum primis in faucibus." },
    { question: "Test Question #5", answer: "Ut eleifend quam orci, ac varius ligula posuere ac. Donec id ornare enim. Aliquam vel metus arcu. Vestibulum ante ipsum primis in faucibus." },
    { question: "Test Question #6", answer: "Ut eleifend quam orci, ac varius ligula posuere ac. Donec id ornare enim. Aliquam vel metus arcu. Vestibulum ante ipsum primis in faucibus." }
];

export default function FAQ() {
    return <div className="top-margin">
        <h1>Frequently Asked Questions</h1>
        {/* TODO: the plug doesn't stay with the rest of the page content when super zoomed out - it stays to the right; address? */}
        <img src="/images/pluggy_boi.png" alt="Pluggy Boi"
            className={`${styles['pluggy-boi']} mobile-hide`} />
        <div className="flex-container">
            <div className={styles['accordions']}>
                {FAQs.map((faq, index) => (
                    <div key={index} className={styles['accordion']}>
                        <Accordion label={faq.question}>
                            <p>{faq.answer}</p>
                            </Accordion>
                    </div>
                ))}
            </div>
        </div>
    </div>
}