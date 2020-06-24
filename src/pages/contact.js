import React from "react"
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../styles/global';
import { theme } from '../styles/theme';
import { Layout, Section, Item } from '../components'

export default function Testimonials() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Layout>
          <Section background="hero">
            <Item width="800px" transparent>
              <h4> Contact!!! </h4>
            </Item>
          </Section>

 
        </Layout>
      </>
    </ThemeProvider>
  )
}
