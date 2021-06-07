import { Layout, Menu } from 'antd';
import 'antd/dist/antd.css';

const DrawMenu = () => {
  return (
    <Menu style={{ width: 256 }} mode="vertical">
      <Menu.SubMenu key="a" title="Shape">
        <Menu.Item key="1">
        </Menu.Item>
        <Menu.Item key="2">
          <rect x="10" y="10" width="30" height="30"/>
        </Menu.Item>
      </Menu.SubMenu>
      <Menu.SubMenu key="b" title="Color">
        <Menu.Item key="3">Red</Menu.Item>
        <Menu.Item key="4">Blue</Menu.Item>
      </Menu.SubMenu>
    </Menu>
  );  
}

const Create = () => {
    return (
      <>
        <Layout.Sider>
          <DrawMenu />
        </Layout.Sider>
        <Layout.Content>
            <h1>Create New Fret Diagram</h1>
        </Layout.Content>
      </>
    );
}

export default Create;