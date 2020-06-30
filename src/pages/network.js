import React from "react"
import { graphql } from 'gatsby'
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../styles/global';
import { theme } from '../styles/theme';
import { Layout, Section, Item, ContainerLg, Image } from '../components'

export default function Testimonials({ data }) {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Layout>
          <Section background="hero">
            <ContainerLg background="light">
              <Item transparent>
                <h3>Organisations I Work With</h3>
              </Item>
            </ContainerLg>
          </Section>


          {data.allContentfulNetwork.edges.map(entry => (
            <Section background="light" id={entry.node.id}>
              <ContainerLg>
                <Item transparent>
                  <Image imageUrl={entry.node.logo.file.url} />
                  <h5>{entry.node.description.description}</h5>
                  <h6>{entry.node.name} </h6>
                </Item>
              </ContainerLg>
            </Section>
          ))}
        </Layout>
      </>
    </ThemeProvider>
  )
}

export const query = graphql`
  {
    allContentfulNetwork {
      edges {
        node {
          description {
            description
          }
          logo {
            file {
              url
            }
          }
          name
          id
        }
      }
    }
  }
`
