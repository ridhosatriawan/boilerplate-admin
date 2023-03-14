import { Layout, Row } from 'antd'
import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

export default function MainLayout({ children }) {
  const { Content } = Layout

  return (
    <Layout className="wrapper-layout">
      <Navbar />
      <Layout>
        <Sidebar />
        <Content className="content">
          <Row className="wrapper-children">{children}</Row>
        </Content>
      </Layout>
    </Layout>
  )
}
