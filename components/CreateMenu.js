import { Menu } from 'antd';

const CreateMenu = () => {
    return (
      <Menu mode="vertical" theme="dark">
        <Menu.SubMenu key="a" title="Shape">
          <Menu.Item key="1">Circle</Menu.Item>
          <Menu.Item key="2">Square</Menu.Item>
        </Menu.SubMenu>
        <Menu.SubMenu key="b" title="Color">
          <Menu.Item key="3">Red</Menu.Item>
          <Menu.Item key="4">Blue</Menu.Item>
        </Menu.SubMenu>
      </Menu>
    );  
  }

export default CreateMenu;