import Head from 'next/head';
import { Layout, Typography } from 'antd';
import CreateMenu from '../components/CreateMenu';
import 'antd/dist/antd.css';
import pageStyles from '../styles/Page.module.css';



const Create = () => {
    return (
      <>
        <Head>
          <title>Fretwiz Create</title>
        </Head>
        <Layout.Sider collapsible="false">
          <CreateMenu />
        </Layout.Sider>
        <Layout.Content className={pageStyles.container}>
          <main className={pageStyles.main}>
            <Typography.Title level={2}>Create New Fret Diagram</Typography.Title>
            <div></div>
          </main>
        </Layout.Content>
      </>
    );
}

export default Create;