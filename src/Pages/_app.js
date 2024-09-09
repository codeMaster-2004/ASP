import '../styles/globals.css'
import App from '../src/App'

function MyApp({ Component, pageProps }) {
  return (
    <App>
      <Component {...pageProps} />
    </App>
  )
}

export default MyApp