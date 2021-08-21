import Landing from '../components/home/Landing'
import Info from '../components/home/Info'
import FAQ from '../components/home/FAQ'
import Sponsors from '../components/home/Sponsors'
import MetaTags from '../components/shared/MetaTags'

// TODO: explore hosting solutions; may want to use our AWS account to run the next server, and then use the Image component
// TODO: write the README and add a license

export default function Home() {
  return <>
    <MetaTags title="MAIS Hacks 2021" description="Canada's largest AI hackathon"
              imagePath="/images/banner.png" route="/" />

    <Landing />
    <Info />
    <FAQ />
    <Sponsors />
  </>
}