import Footer from '../components/shared/Footer';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <>
    <Component {...pageProps} />
    <Footer />
  </>
}

export default MyApp
