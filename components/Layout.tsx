import React from 'react'
import Header from './header/Header'
import { Children } from  '../types/layout'


const Layout = ({children}:Children) => {
  return (
    <>
      <Header/>
      <main>{children}</main>
    </>
  )
}

export default Layout