import Footer from '../components/shared/Footer';
import '../styles/globals.scss'

// TODO: add head data (+ a _document.js file)

function MyApp({ Component, pageProps }) {
  return <>
    <Component {...pageProps} />
    <Footer />
  </>
}

export default MyApp
