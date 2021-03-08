import { UsernameProvider } from '../contexts/UsernameContext';
import '../styles/global.css'

function MyApp({ Component, pageProps }) {
  return(
    <UsernameProvider>
      <Component {...pageProps}/>
    </UsernameProvider>);
}

export default MyApp