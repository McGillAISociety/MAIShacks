import Footer from '../components/shared/Footer';
import '../styles/globals.scss'

// TODO: add head data (+ a _document.js file)
// TODO: add animations on load
// TODO: fill out content based on last year's site

function MyApp({ Component, pageProps }) {
  return <>
    <Component {...pageProps} />
    <Footer />
  </>
}

export default MyApp
