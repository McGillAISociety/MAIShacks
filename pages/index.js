import Landing from "../components/home/Landing";
import Info from "../components/home/Info";
import FAQ from "../components/home/FAQ";
import Sponsors from "../components/shared/Sponsors";
import MetaTags from "../components/shared/MetaTags";

// TODO: write the README and add a license

export default function Home() {
  return (
    <>
      <MetaTags
        title="MAIS Hacks 2022"
        description="Canada's largest AI hackathon"
        imagePath="/meta/banner.png"
        route="/"
      />

      <Landing />
      <Info />
      <FAQ />
      <Sponsors />
    </>
  );
}
