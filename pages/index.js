import Landing from '../components/home/Landing'
import Info from '../components/home/Info'
import FAQ from '../components/home/FAQ'
import Sponsors from '../components/home/Sponsors'

// TODO: explore hosting solutions; may want to use our AWS account to run the next server, and then use the Image component
// TODO: write the README and add a license
// TODO: add head data

export default function Home() {
  return <>
    <Landing />
    <Info />
    <FAQ />
    <Sponsors />
  </>
}