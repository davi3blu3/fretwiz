import Head from 'next/head';
import { Layout, Typography } from 'antd';
import 'antd/dist/antd.css';
import pageStyles from '../styles/Page.module.css';

const Home = () => {
  return (
    <>
      <Head>
        <title>Fretwiz Home</title>
      </Head>
      <Layout.Content className={pageStyles.container}>
        <main className={pageStyles.main}>
          <Typography.Title>Welcome to FretWiz</Typography.Title>
          <Typography.Title level={4}>
            We make it easy to create fretboard diagrams so you can practice your way to guitar mastery!
          </Typography.Title>
        </main>
      </Layout.Content>
    </>
  );
}

export default Home
