import { Layout } from 'antd';
import Nav from './Nav';

const NextLayout = ({children}) => {
    return (
        <Layout>
          <Layout.Header className="header">
            <Nav />
          </Layout.Header>
          <Layout>
              {children}
          </Layout>
        </Layout>
    );
}

export default NextLayout;