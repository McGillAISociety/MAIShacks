import Resources from "../components/live/Resources";
import Schedule from "../components/live/Schedule";
import Sponsors from "../components/shared/Sponsors";
import MetaTags from "../components/shared/MetaTags";
import LiveLanding from "../components/live/LiveLanding";

export default function Live() {
  return (
    <>
      <MetaTags
        title="LIVE | MAIS Hacks 2023"
        description="Canada's largest AI hackathon"
        imagePath="/meta/banner.png"
        route="/live"
      />
      <LiveLanding />
      <Resources />
      <Schedule />
      <div className="top-margin">
        <Sponsors justImages />
      </div>
    </>
  );
}
