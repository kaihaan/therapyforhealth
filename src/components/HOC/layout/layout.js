import React from "react"
import { TopMenu, Footer } from '../../../components'
import { StyledLayoutHOC } from './layout.styled' 

export default function Layout({ children }) {
  return (
    <StyledLayoutHOC>
      <TopMenu></TopMenu>
      {children}
      <Footer></Footer>
    </StyledLayoutHOC>
  )
}