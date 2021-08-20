import Footer from '../components/shared/Footer';
import '../styles/globals.scss'

// TODO: add animations on load
// TODO: fill out content based on last year's site
// TODO: make sure that the content is accurate - what platform will be used for the hackathon if it's remote?

function MyApp({ Component, pageProps }) {
  return <>
    <Component {...pageProps} />
    <Footer />
  </>
}

export default MyApp
