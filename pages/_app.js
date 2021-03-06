import NextLayout from '../components/NextLayout';
import 'antd/dist/antd.css';

function MyApp({ Component, pageProps }) {
  return (
    <NextLayout>
      <Component {...pageProps} />
    </NextLayout>
  )
}

export default MyApp
