import React from 'react'
import { GlobalStyle } from '@theme/index'
import { Component } from './styles'

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Component>{children}</Component>
    </>
  )
}

interface LayoutProps {
  children: React.ReactNode
}
