import { Menu } from 'antd';
import Link from 'next/link';

const Nav = () => {
    return (
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="nav1">
            <Link href="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="nav2">
            <Link href="/create">Create</Link>
        </Menu.Item>
      </Menu>
    );
}

export default Nav;