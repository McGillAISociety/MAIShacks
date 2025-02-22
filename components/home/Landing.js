import styles from "../../styles/Landing.module.scss";
import MainSiteLink from "../../components/shared/MainSiteLink";
import Button from "../shared/Button";
import Countdown from "react-countdown";
import Link from "next/link";

export default function Landing() {
  
  const zeroify = (_num) => {
    const num = String(_num);
    return num.length === 1 ? `0${num}` : num;
  };

  const text = (
    <div className={styles["top-content__text"]}>
      <p>Join Canada&apos;s 150+ brightest minds for a 24 hour AI hackathon!</p>
      {/*<Button
        expand
        onClick={() => window.open("https://forms.gle/zsV9a43v9rhNS8yn9")}
      >
        Apply now!
      </Button>*/}
      {/* Replace the button with this after the applications close and the new schedule is ready */}
      *<Link passHref href="/live">
        <div>
          <Button expand onClick={() => {}}>
            Go to live site
          </Button>
        </div>
      </Link>
      {/*<Button
        onClick={() => {}}
      >
        Applications open soon!
    </Button>*/}
    </div>
  );

  return (
    <>
      <div className={styles["background"]}></div>
      <MainSiteLink />
      <div className={styles["top-content"]}>
        <div
          className={`mobile-hide flex-container ${styles["top-content__desktop-container"]}`}
        >
          <img
            src="/images/logo_big.png"
            alt="big logo"
            className={`bob-up-down ${styles["top-content__desktop-logo"]}`}
          />
          {text}
        </div>
        <div className="desktop-hide">
          <div className="flex">
            <img
              src="/images/logo_small.png"
              alt="small logo"
              className={`bob-up-down ${styles["top-content__mobile-logo"]}`}
            />
          </div>
          <div className="flex">{text}</div>
        </div>
      </div>
      <div className={`flex-container ${styles["bottom-content-container"]}`}>
        <div className={styles["bottom-content"]}>
          <h2>February 1st & 2nd, 2025</h2>
          <div
            className={`flex-container ${styles["bottom-content__countdowns"]}`}
          >
            <div>
              <p>Hackathon starts in:</p>
              <Countdown
                date={Date.parse("2025-02-01T09:30:00+0000")}
                renderer={({ days, hours, minutes, seconds }) => (
                  <span className={styles["bottom-content__countdown"]}>
                    {zeroify(days)}&nbsp;:&nbsp;{zeroify(hours)}&nbsp;:&nbsp;
                    {zeroify(minutes)}&nbsp;:&nbsp;{zeroify(seconds)}
                  </span>
                )}
              />
            </div>

            {/* <div>
                        <p>Schedule, challenges, and prizes drop in:</p>
                        <Countdown
                            date={Date.parse("2021-09-29T12:00:00+0000")}
                            renderer={({ days, hours, minutes, seconds }) => (
                                <span className={styles['bottom-content__countdown']}>
                                    {zeroify(days)}&nbsp;:&nbsp;{zeroify(hours)}&nbsp;:&nbsp;
                                    {zeroify(minutes)}&nbsp;:&nbsp;{zeroify(seconds)}
                                </span>
                            )}
                        />
                    </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
