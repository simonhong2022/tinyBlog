import '@/styles/home.css'
import '@/styles/blogcard.css'
import '@/styles/blogcontent.css'
import 'semantic-ui-css/semantic.min.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
