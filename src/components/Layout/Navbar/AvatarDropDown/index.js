import { LogoutOutlined, UserOutlined } from '@ant-design/icons'
import { Avatar, Button, Dropdown, Space, Typography } from 'antd'
import React from 'react'

export default function AvatarDropDown() {
  const items = [
    {
      key: 'signOut',
      danger: true,
      icon: <LogoutOutlined />,
      label: 'Log Out',
    },
  ]
  return (
    <Dropdown
      menu={{
        items,
      }}
    >
      <Space>
        <Avatar icon={<UserOutlined />} />
        <Typography.Text>Username</Typography.Text>
      </Space>
    </Dropdown>
  )
}
