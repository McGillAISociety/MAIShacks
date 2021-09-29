import Resources from "../components/live/Resources";
import Schedule from '../components/live/Schedule';
import Sponsors from '../components/shared/Sponsors';
import MetaTags from '../components/shared/MetaTags';
import HomeButton from '../components/live/HomeButton';
import MainSiteLink from '../components/shared/MainSiteLink';


export default function Live() {
    return <>
        <MetaTags title="LIVE | MAIS Hacks 2021" description="Canada's largest AI hackathon"
            imagePath="/meta/banner.png" route="/live" />
        <HomeButton />
        <MainSiteLink />
        <Resources />
        <Schedule />
        <div className="top-margin">
            <Sponsors justImages />
        </div>
    </>;
}