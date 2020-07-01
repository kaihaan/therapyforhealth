import React from "react"
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../styles/global';
import { theme } from '../styles/theme';
import { Layout, Section, Item, ContainerLg, ContactForm } from '../components'

export default function Testimonials() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Layout>
          <Section background="light">
            <ContainerLg>
              <Item halign="left">
                <p>Please use these details,</p>
                <p>or the contact form</p>
                <hr />
                <p>78 Sunnyside St</p>
                <p> Belfast, BT7 3ED</p>
                <p>United Kingdom</p>
                <a href="mailtopatricia@therapyforhealth.co.uk">
                  patricia@therapyforhealth.co.uk
                </a>
                <p>+44 7834 917 309</p>
              </Item>
            </ContainerLg>
            <ContainerLg>
              <Item halign="left">
                <ContactForm />
              </Item>
            </ContainerLg>
          </Section>


        </Layout>
      </>
    </ThemeProvider>
  )
}

