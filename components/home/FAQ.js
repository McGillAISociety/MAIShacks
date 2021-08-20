import styles from '../../styles/FAQ.module.scss';
import Accordion from '../shared/Accordion';

const FAQs = [
    { question: "Can I register for MAIS Hacks?", answer: "Anyone can participate! Cegep, undergraduates, Masters, and PhD students are all welcome." },
    { question: "How many people can I have on my team?", answer: "You can form teams of up to 4 people with no restrictions on school, province, or experience level." },
    { question: "I'll need help to form a team!", answer: "We will be having a team formation channel on Microsoft Teams for you to get in contact with anyone who may also be looking for a team! Additionally, we will be having a team formation Facebook Group before the hackathon." },
    { question: "I am new to AI. Can I still particpate?", answer: "Yes - all skill levels are welcome at MAIS Hacks. More importantly, we aim to provide a super-condensed - and fun - learning experience!" },
    { question: "Does it cost anything to take part?", answer: "The event is completely free of charge." },
    { question: "What is the application process like?", answer: "We're looking for creative and enthusiastic people with the skills to contribute to cool projects. Since this is an AI themed hackathon, we prefer applicants with past AI experience and projects - however, don't let this deter you from applying! Show us what makes you special and let your enthusiasm shine!" },
    { question: "Do I need to install any software?", answer: "We will be using Slack and Zoom. While you can access the platform through a web browser, we encourage all hackers to install these softwares for the best experience." },
    { question: "Do I need to create any accounts?", answer: "You will need to create a DevPost account to submit your project at the end of the hackthon." }
];

export default function FAQ() {
    return <div className="top-margin">
        <h1>Frequently Asked Questions</h1>
        <img src="/images/pluggy_boi.png" alt="pluggy boi"
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