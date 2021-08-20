import Landing from '../components/home/Landing'
import Info from '../components/home/Info'
import FAQ from '../components/home/FAQ'
import Sponsors from '../components/home/Sponsors'

import Head from 'next/head'

// TODO: explore hosting solutions; may want to use our AWS account to run the next server, and then use the Image component
// TODO: write the README and add a license

export default function Home() {
  return <>
    {/* TODO: once the banner is created, include that here as an image for link previews */}
    <Head>
      <title>MAIS Hacks 2021</title>
      <meta name="title" content="MAIS Hacks 2021" />
      <meta name="description" content="Canada's largest AI hackathon" />
    </Head>

    <Landing />
    <Info />
    <FAQ />
    <Sponsors />
  </>
}