import Footer from '../components/shared/Footer';
import '../styles/globals.scss'

// TODO: add animations on load

function MyApp({ Component, pageProps }) {
  return <>
    <Component {...pageProps} />
    <Footer />
  </>
}

export default MyApp
