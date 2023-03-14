import { Layout, Menu, Typography } from 'antd'
import React from 'react'
import AvatarDropDown from './AvatarDropDown'

export default function Navbar() {
  return (
    <Layout.Header className="navbar">
      <Typography.Title>EMC</Typography.Title>
      <AvatarDropDown />
    </Layout.Header>
  )
}
