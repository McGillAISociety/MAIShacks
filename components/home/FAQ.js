import styles from "../../styles/FAQ.module.scss";
import Accordion from "../shared/Accordion";

const FAQs = [
  {
    question: "Can I register for MAIS Hacks?",
    answer:
      "Anyone can participate! CEGEP, undergraduates, masters students, and PhD students are all welcome.",
  },
  {
    question: "How many people can I have on my team?",
    answer:
      "You can form teams of up to 4 people with no restrictions on school, province, or experience level.",
  },
  {
    question: "I am new to AI. Can I still particpate?",
    answer:
      "Yes - all skill levels are welcome at MAIS Hacks. More importantly, we aim to provide a super-condensed - and fun - learning experience! Talks of any level will be offered throughout the weekend.",
  },
  {
    question: "Only one track this year?",
    answer:
      "Yes, this year we offer only one track, but don’t worry that does not mean you will have access to less activities. You will be able to chose whichever talk or social activity you want to participate in!",
  },
  {
    question: "Does it cost anything to take part?",
    answer: "The event is completely free of charge.",
  },
  {
    question: "What is the application process like?",
    answer:
      "We're looking for creative and enthusiastic people with the skills to contribute to cool projects. Since this is an AI themed hackathon, we prefer applicants with past AI experience and projects - however, don't let this deter you from applying! Show us what makes you special and let your enthusiasm shine!",
  },
  {
    question: "Harassment and Incident Reporting Policy",
    answer: (
      <div>
        MAIS Hacks and McGill Artificial Intelligence Society does not tolerate
        harassment, bullying, or discrimination in any form. In the case of an
        incident, participants can report it confidentially to any staff member,
        who will deal with the situation appropriately and/or report the
        incident to an organizer. Staff will be present at the registration
        booth in the mezzanine and monitoring the McGill AI Society account on
        Discord for all active hackathon hours.
        <br></br>
        <br></br>
        In the case of an allegation, accused parties will be removed from the
        Discord and venue, and will no longer be allowed to participate in MAIS
        Hacks. The rest of the team who are not involved in the allegation will
        be allowed to continue the Hackathon. If relevant, prizes will be
        withheld from the accused party until a judgment is made by Engineering
        Undergraduate Society and/or McGill University. Further action will be
        taken at the discretion of McGill Artificial Intelligence Society,
        Engineering Undergraduate Society, and/or McGill University.
      </div>
    ),
  },

  // { question: "Do I need to install any software?", answer: "We will have official . While you can access the platform through a web browser, we encourage all hackers to install these softwares for the best experience." },
  // { question: "Do I need to create any accounts?", answer: "You will need to create a DevPost account to submit your project at the end of the hackthon." }
];

// TODO: mayhaps change the laout with the pluggy boi, since it leaves a lot of whitespace on the right...
// and doesn't look great on bigger screens
export default function FAQ() {
  return (
    <div className="top-margin">
      <h1>Frequently Asked Questions</h1>
      <img
        src="/images/pluggy_boi.png"
        alt="pluggy boi"
        className={`${styles["pluggy-boi"]} mobile-hide`}
      />
      <div className="flex-container">
        <div className={styles["accordions"]}>
          {FAQs.map((faq, index) => (
            <div key={index} className={styles["accordion"]}>
              <Accordion label={faq.question}>
                <p>{faq.answer}</p>
              </Accordion>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
