import styles from "../../styles/Info.module.scss";

export default function Info() {
  return (
    <div>
      <div className="flex-container">
        <div>
          <div className={"text-container"}>
            <h1>
              One of Canada&apos;s Largest AI Hackathon Is Back In-Person.
            </h1>
            <p>
              Innovation lies at the heart of MAIS Hacks, with past winners
              building solutions for topics ranging between music composition,
              plant pathology, and security patrols.
            </p>
            <p>
              Regardless of whether you’re an AI novice or veteran, everyone is
              welcome to join. Just bring a desire to learn about how AI can be
              used to overcome societal problems and boost competitiveness – and
              we’ll provide the mentors, computing credits, and swag.
            </p>
            <p>
              This year, we are offering one single track where every
              participant would have access to ethic panel, talks to introduce
              you to AI and ML and to dive deeper into the newest discoveries.
            </p>
          </div>
          <img
            src="/images/connecty_boi.png"
            alt="connecty boi"
            className={`${styles["connecty-boi"]} mobile-hide`}
          />
        </div>
      </div>
      <div className="flex-container">
        <div
          className={`card-border ${styles["bubble"]} ${styles["bubble--left"]}`}
        >
          <h2>Social Networking and Team Making</h2>
          <p>
            Don&apos;t worry if you apply alone, there will be ample
            opportunities to connect with your peers and match yourself with the
            perfect team!
          </p>
          <p>
            MAIS Hacks provides many social activities and networking
            opportunities to help you make lasting connections alongside a
            Facebook group to help find your perfect team.
          </p>
        </div>
        <div
          className={`card-border ${styles["bubble"]} ${styles["bubble--center"]}`}
        >
          <h2>Workshops and Activities</h2>
          <p>
            Want to upgrade your toolbox? Looking for inspiration? Our workshops
            and sponsor talks will surely help you gain knowledge and
            creativity.
          </p>
          <p>
            If you think that a hackathon is all work and no play, think again!
            Get ready for video games, movie screenings, Easter eggs and funky
            prizes to be won...as well as surprises we can’t reveal to you just
            yet!
          </p>
        </div>
        <div
          className={`card-border ${styles["bubble"]} ${styles["bubble--right"]}`}
        >
          <h2>Projects</h2>
          <p>
            Build an awesome AI project with your teammates - and along the way,
            gain invaluable experience, opportunities, and exposure to the field
            of AI!
          </p>
          <p>
            And if that&apos;s not motivation enough, we have over $5000 in
            prizes to be won.
          </p>
          <p>
            Just last year, our winners consisted of innovative projects such as
            aJust last year, our winners consisted of innovative projects such
            as a helper to make the best CV, generator of creative image and
            audio emotion detector.
          </p>
        </div>
      </div>
    </div>
  );
}
