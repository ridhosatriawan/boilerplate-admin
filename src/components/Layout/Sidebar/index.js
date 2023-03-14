import { Layout, Menu } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { sidebarItems } from './sidebarItems'

export default function Sidebar(props) {
  const { items } = sidebarItems()
  const navigate = useNavigate()

  return (
    <Layout.Sider {...props} className="sidebar">
      <Menu
        mode="inline"
        onSelect={({ key }) => {
          navigate(key)
        }}
        items={items}
      />
    </Layout.Sider>
  )
}
