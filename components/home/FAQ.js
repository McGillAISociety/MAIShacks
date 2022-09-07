import styles from '../../styles/FAQ.module.scss';
import Accordion from '../shared/Accordion';

const FAQs = [
    { question: "Can I register for MAIS Hacks?", answer: "Anyone can participate! CEGEP, undergraduates, masters students, and PhD students are all welcome." },
    { question: "How many people can I have on my team?", answer: "You can form teams of up to 4 people with no restrictions on school, province, or experience level." },
    { question: "I am new to AI. Can I still particpate?", answer: "Yes - all skill levels are welcome at MAIS Hacks. More importantly, we aim to provide a super-condensed - and fun - learning experience!" },
    { question: "What is the Beginner's Track?", answer: "At McGill AI, we believe that everyone should be able to contribute to innovation. This year, CS students new to machine learning are welcome to join us in the beginner’s track. With guidance from our mentors, participants will, in 24 hr, build and deploy their very first machine learning model." },
    { question: "What is the Policy Track?", answer: "For the first time ever, the MAIS Hackathon will feature a policy track for students who want to engage with the non-technical component of AI. Teams will be tasked with creating and presenting the ethics policy for a company’s AI product rollout, and must think through how to ensure every step of the rollout adheres to a set of ethical standards, from initial development to data usage five years later. Students will learn about and engage with key concepts in AI ethics, product development, data justice, and public and private policy. This track is ideal for students who want to get involved in AI from a non-technical background." },
    { question: "Does it cost anything to take part?", answer: "The event is completely free of charge." },
    { question: "What is the application process like?", answer: "We're looking for creative and enthusiastic people with the skills to contribute to cool projects. Since this is an AI themed hackathon, we prefer applicants with past AI experience and projects - however, don't let this deter you from applying! Show us what makes you special and let your enthusiasm shine!" },
    { question: "Is there a Code of Conduct?", answer: <div>Yes, you can find it  <a href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf">here</a></div> },

    // { question: "Do I need to install any software?", answer: "We will have official . While you can access the platform through a web browser, we encourage all hackers to install these softwares for the best experience." },
    // { question: "Do I need to create any accounts?", answer: "You will need to create a DevPost account to submit your project at the end of the hackthon." }
];

// TODO: mayhaps change the laout with the pluggy boi, since it leaves a lot of whitespace on the right...
// and doesn't look great on bigger screens
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