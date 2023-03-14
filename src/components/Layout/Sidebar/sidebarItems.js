import { getItem } from './sidebarGetItem'
import { LayoutOutlined, DatabaseOutlined, EnvironmentOutlined, IdcardOutlined, UserOutlined } from '@ant-design/icons'

const sidebarItems = () => {
  const items = [
    getItem('Dashboard', '/dashboard', <LayoutOutlined />),
    getItem('Voter', '/voter', <IdcardOutlined />),
    getItem('Master', 'sub1', <DatabaseOutlined />, [
      getItem('User', '/user', <UserOutlined />),
      getItem(
        'Location',
        'g1',
        <EnvironmentOutlined />,
        [
          getItem('Province', '/province'),
          getItem('City', '/city'),
          getItem('Subdistrict', '/subdistrict'),
          getItem('Village', '/village'),
        ],
        'group',
      ),
    ]),
  ]

  return { items }
}

export { sidebarItems }
